export const pick = (obj, keys) =>
    Object.fromEntries(
        Object.entries(obj).filter(([k]) => keys.includes(k))
    )

export const omit = (obj, keys) =>
    Object.fromEntries(
        Object.entries(obj).filter(([k]) => !keys.includes(k))
    )

export const mapValues = (obj, fn) =>
    Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k, fn(v, k)])
    )

export const deepMerge = (target, source) => {
    for (const key in source) {
        if (
            source[key] instanceof Object &&
            key in target
        ) {
            Object.assign(
                source[key],
                deepMerge(target[key], source[key])
            )
        }
    }
    return { ...target, ...source }
}