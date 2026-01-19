export default defineNuxtPlugin(() => {
  if (process.client) {
    // Подавление предупреждений о hydration mismatch в console.warn
    const originalWarn = console.warn
    console.warn = (...args: any[]) => {
      const message = args[0]?.toString() || ''
      if (
        message.includes('Hydration') ||
        message.includes('hydration') ||
        message.includes('mismatch') ||
        message.includes('Hydration completed but contains mismatches')
      ) {
        return
      }
      originalWarn.apply(console, args)
    }

    // Подавление предупреждений через обработчик ошибок Vue
    const originalError = console.error
    console.error = (...args: any[]) => {
      const message = args[0]?.toString() || ''
      if (
        message.includes('Hydration') ||
        message.includes('hydration') ||
        message.includes('mismatch') ||
        message.includes('Hydration completed but contains mismatches')
      ) {
        return
      }
      originalError.apply(console, args)
    }

    // Подавление предупреждений через window.onerror (если есть)
    const originalOnError = window.onerror
    window.onerror = (message, source, lineno, colno, error) => {
      if (
        typeof message === 'string' &&
        (message.includes('Hydration') ||
          message.includes('hydration') ||
          message.includes('mismatch'))
      ) {
        return true
      }
      if (originalOnError) {
        return originalOnError(message, source, lineno, colno, error)
      }
      return false
    }
  }
})
