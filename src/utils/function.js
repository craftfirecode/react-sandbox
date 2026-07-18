export const debounce = (fn, delay = 300) => {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => fn(...args), delay)
    }
}

export const throttle = (fn, limit = 300) => {
    let inThrottle
    return (...args) => {
        if (!inThrottle) {
            fn(...args)
            inThrottle = true
            setTimeout(() => (inThrottle = false), limit)
        }
    }
}

export const once = (fn) => {
    let called = false
    let result
    return (...args) => {
        if (!called) {
            called = true
            result = fn(...args)
        }
        return result
    }
}