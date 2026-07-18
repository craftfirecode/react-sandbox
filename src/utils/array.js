export const last = (arr) => arr.at(-1)

export const first = (arr) => arr[0]

export const unique = (arr) => [...new Set(arr)]

export const compact = (arr) => arr.filter(Boolean)

export const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    )

export const groupBy = (arr, fn) =>
    arr.reduce((acc, item) => {
        const key = fn(item)
        acc[key] = acc[key] || []
        acc[key].push(item)
        return acc
    }, {})