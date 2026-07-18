export const clamp = (num, min, max) =>
    Math.min(Math.max(num, min), max)

export const round = (num, decimals = 2) =>
    Number(num.toFixed(decimals))

export const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min