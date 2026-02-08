import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import Image from "next/image"
import { useState, useRef, useEffect, useCallback, useMemo } from "react"
import { ZOOM_CONSTANTS, TOUCH_CONSTANTS } from "@/constants/image-zoom"
import type { TouchStartState, Position, DragStart } from "@/types/image-modal"
import { logger } from "@/lib/logger"

interface ImageModalProps {
  trigger: React.ReactNode
  src: string
  alt: string
  className?: string
}

/**
 * ImageModal Component
 *
 * A reusable modal component for displaying images with zoom and pan functionality.
 * Supports both desktop (mouse wheel, drag) and mobile (pinch-to-zoom, touch pan) interactions.
 *
 * @param trigger - React node that triggers the modal
 * @param src - Image source URL
 * @param alt - Alt text for accessibility
 * @param className - Additional CSS classes
 */
export default function ImageModal({ trigger, src, alt, className = "" }: ImageModalProps) {
  const [scale, setScale] = useState(ZOOM_CONSTANTS.DEFAULT_SCALE)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState<DragStart>({ x: 0, y: 0 })
  const [touchStart, setTouchStart] = useState<TouchStartState | null>(null)
  const [lastTouchDistance, setLastTouchDistance] = useState(0)
  const imageRef = useRef<HTMLDivElement>(null)

  /**
   * Reset zoom and position to default values
   */
  const resetZoom = useCallback(() => {
    setScale(ZOOM_CONSTANTS.DEFAULT_SCALE)
    setPosition({ x: 0, y: 0 })
  }, [])

  /**
   * Zoom in by the configured step amount
   */
  const zoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev * ZOOM_CONSTANTS.ZOOM_STEP, ZOOM_CONSTANTS.MAX_SCALE))
  }, [])

  /**
   * Zoom out by the configured step amount
   */
  const zoomOut = useCallback(() => {
    setScale((prev) => Math.max(prev / ZOOM_CONSTANTS.ZOOM_STEP, ZOOM_CONSTANTS.MIN_SCALE))
  }, [])

  /**
   * Handle mouse wheel events for zooming
   */
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault()
      if (e.deltaY < 0) {
        zoomIn()
      } else {
        zoomOut()
      }
    },
    [zoomIn, zoomOut]
  )

  /**
   * Handle mouse down for initiating drag
   */
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (scale > ZOOM_CONSTANTS.DEFAULT_SCALE) {
        setIsDragging(true)
        setDragStart({
          x: e.clientX - position.x,
          y: e.clientY - position.y,
        })
      }
    },
    [scale, position]
  )

  /**
   * Handle mouse move for dragging when zoomed
   */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging && scale > ZOOM_CONSTANTS.DEFAULT_SCALE) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        })
      }
    },
    [isDragging, scale, dragStart]
  )

  /**
   * Handle mouse up to end dragging
   */
  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  /**
   * Calculate distance between two touch points for pinch zoom
   */
  const getTouchDistance = useCallback((touches: TouchList): number => {
    if (touches.length < TOUCH_CONSTANTS.PINCH_TOUCH_COUNT) {
      return TOUCH_CONSTANTS.MIN_TOUCH_DISTANCE
    }
    const touch1 = touches[0]
    const touch2 = touches[1]
    return Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY)
  }, [])

  /**
   * Handle touch start for mobile interactions
   */
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touchCount = e.touches.length

      if (touchCount === TOUCH_CONSTANTS.SINGLE_TOUCH_COUNT) {
        // Single touch - prepare for panning
        if (scale > ZOOM_CONSTANTS.DEFAULT_SCALE) {
          setIsDragging(true)
          setDragStart({
            x: e.touches[0].clientX - position.x,
            y: e.touches[0].clientY - position.y,
          })
        }
      } else if (touchCount === TOUCH_CONSTANTS.PINCH_TOUCH_COUNT) {
        // Two touches - prepare for pinch zoom
        const distance = getTouchDistance(e.touches)
        setTouchStart({
          x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
          y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
          distance,
          initialScale: scale,
        })
        setLastTouchDistance(distance)
      }
    },
    [scale, position, getTouchDistance]
  )

  /**
   * Handle touch move for panning and pinch zoom
   */
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault()

      const touchCount = e.touches.length

      if (
        touchCount === TOUCH_CONSTANTS.SINGLE_TOUCH_COUNT &&
        isDragging &&
        scale > ZOOM_CONSTANTS.DEFAULT_SCALE
      ) {
        // Single touch - panning
        setPosition({
          x: e.touches[0].clientX - dragStart.x,
          y: e.touches[0].clientY - dragStart.y,
        })
      } else if (touchCount === TOUCH_CONSTANTS.PINCH_TOUCH_COUNT && touchStart) {
        // Two touches - pinch zoom
        const distance = getTouchDistance(e.touches)
        const initialDistance = touchStart.distance

        if (initialDistance > TOUCH_CONSTANTS.MIN_TOUCH_DISTANCE) {
          const scaleChange = distance / initialDistance
          const newScale = Math.max(
            ZOOM_CONSTANTS.MIN_SCALE,
            Math.min(ZOOM_CONSTANTS.MAX_SCALE, touchStart.initialScale * scaleChange)
          )
          setScale(newScale)
          setLastTouchDistance(distance)
        }
      }
    },
    [isDragging, scale, dragStart, touchStart, getTouchDistance]
  )

  /**
   * Handle touch end to reset touch state
   */
  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
    setTouchStart(null)
    setLastTouchDistance(0)
  }, [])

  /**
   * Handle keyboard events (ESC to reset zoom)
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        resetZoom()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [resetZoom])

  /**
   * Memoized button class names for consistency
   */
  const buttonClassName = useMemo(
    () =>
      "bg-black/50 hover:bg-black/70 active:bg-black/80 text-white rounded-full p-3 md:p-2 transition-colors touch-manipulation",
    []
  )

  /**
   * Memoized zoom percentage display
   */
  const zoomPercentage = useMemo(() => Math.round(scale * 100), [scale])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={`cursor-pointer transition-transform hover:scale-105 ${className}`}>
          {trigger}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[98vh] p-0 overflow-hidden bg-black/95">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <div
          className="relative w-full h-full flex items-center justify-center touch-none"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            cursor: isDragging
              ? 'grabbing'
              : scale > ZOOM_CONSTANTS.DEFAULT_SCALE
                ? 'grab'
                : 'default',
          }}
        >
          <div
            ref={imageRef}
            className="relative transition-transform duration-200 ease-out"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: 'center',
            }}
          >
            <Image
              src={src}
              alt={alt}
              width={800}
              height={1200}
              className="max-h-[90vh] object-contain"
              priority
              draggable={false}
              onError={(e) => {
                logger.error('Failed to load image', {
                  component: 'ImageModal',
                  action: 'image_load_error',
                  src,
                })
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>

          {/* Zoom Controls */}
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            <button
              onClick={zoomIn}
              className={buttonClassName}
              title="Zoom In"
              aria-label="Zoom In"
              type="button"
            >
              <ZoomIn size={24} className="md:w-5 md:h-5" />
            </button>
            <button
              onClick={zoomOut}
              className={buttonClassName}
              title="Zoom Out"
              aria-label="Zoom Out"
              type="button"
            >
              <ZoomOut size={24} className="md:w-5 md:h-5" />
            </button>
            <button
              onClick={resetZoom}
              className={buttonClassName}
              title="Reset Zoom"
              aria-label="Reset Zoom"
              type="button"
            >
              <RotateCcw size={24} className="md:w-5 md:h-5" />
            </button>
          </div>

          {/* Zoom Level Indicator */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {zoomPercentage}%
          </div>

          {/* Close Button */}
          <div className="absolute top-4 right-4 z-10">
            <DialogTrigger asChild>
              <button
                className={buttonClassName}
                onClick={resetZoom}
                aria-label="Close"
                type="button"
              >
                <X size={24} className="md:w-5 md:h-5" />
              </button>
            </DialogTrigger>
          </div>

          {/* Instructions */}
          {scale === ZOOM_CONSTANTS.DEFAULT_SCALE && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg text-xs md:text-sm text-center max-w-[90%]">
              <p className="hidden md:block">
                Use mouse wheel to zoom • Drag to pan when zoomed • Press ESC to reset
              </p>
              <p className="md:hidden">
                Pinch to zoom • Drag to pan when zoomed • Tap buttons to zoom
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
