/**
 * Centralized logging utility for production-ready error handling
 * Compatible with static export builds
 */

type LogLevel = 'error' | 'warn' | 'info' | 'debug'

interface LogContext {
  component?: string
  action?: string
  [key: string]: unknown
}

/**
 * Production-safe logger that only logs in development
 * Safe for static export environments
 */
const isDevelopment = (): boolean => {
  try {
    return typeof process !== 'undefined' && process.env?.NODE_ENV === 'development'
  } catch {
    return false
  }
}

const log = (level: LogLevel, message: string, context?: LogContext): void => {
  if (typeof window === 'undefined' && typeof console === 'undefined') {
    return // Skip logging in server-side static export
  }

  const isDev = isDevelopment()

  if (!isDev && level !== 'error') {
    return // In production, only log errors
  }

  try {
    if (typeof console !== 'undefined') {
      const logMethod = console[level] || console.log
      if (logMethod && typeof logMethod === 'function') {
        logMethod(`[${level.toUpperCase()}]`, message, context || '')
      }
    }
  } catch {
    // Silently fail if logging is not available
  }
}

export const logger = {
  error: (message: string, context?: LogContext) => log('error', message, context),
  warn: (message: string, context?: LogContext) => log('warn', message, context),
  info: (message: string, context?: LogContext) => log('info', message, context),
  debug: (message: string, context?: LogContext) => log('debug', message, context),
}

