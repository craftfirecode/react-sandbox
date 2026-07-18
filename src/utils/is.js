export const isNil = (v) => v == null

export const isEmpty = (v) =>
    isNil(v) ||
    (typeof v === "string" && v.trim() === "") ||
    (Array.isArray(v) && v.length === 0) ||
    (typeof v === "object" && Object.keys(v).length === 0)

export const isNumber = (v) => typeof v === "number" && !isNaN(v)

export const isString = (v) => typeof v === "string"

export const isArray = Array.isArray

export const isObject = (v) =>
    v !== null && typeof v === "object" && !Array.isArray(v)