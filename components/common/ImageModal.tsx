import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

interface ImageModalProps {
  trigger: React.ReactNode
  src: string
  alt: string
  className?: string
}

export default function ImageModal({ trigger, src, alt, className = "" }: ImageModalProps) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  const resetZoom = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const zoomIn = () => {
    setScale(prev => Math.min(prev * 1.2, 5))
  }

  const zoomOut = () => {
    setScale(prev => Math.max(prev / 1.2, 0.5))
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      zoomIn()
    } else {
      zoomOut()
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        resetZoom()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

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
          className="relative w-full h-full flex items-center justify-center"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: isDragging ? 'grabbing' : scale > 1 ? 'grab' : 'default' }}
        >
          <div
            ref={imageRef}
            className="relative transition-transform duration-200 ease-out"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: 'center'
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
            />
          </div>

          {/* Zoom Controls */}
          <div className="absolute top-4 left-4 flex gap-2">
            <button
              onClick={zoomIn}
              className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              title="Zoom In"
            >
              <ZoomIn size={20} />
            </button>
            <button
              onClick={zoomOut}
              className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut size={20} />
            </button>
            <button
              onClick={resetZoom}
              className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              title="Reset Zoom"
            >
              <RotateCcw size={20} />
            </button>
          </div>

          {/* Zoom Level Indicator */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {Math.round(scale * 100)}%
          </div>

          {/* Close Button */}
          <div className="absolute top-4 right-4">
            <DialogTrigger asChild>
              <button 
                className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                onClick={resetZoom}
              >
                <X size={20} />
              </button>
            </DialogTrigger>
          </div>

          {/* Instructions */}
          {scale === 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg text-sm text-center">
              <p>Use mouse wheel to zoom • Drag to pan when zoomed • Press ESC to reset</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 