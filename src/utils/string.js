export const capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1)

export const kebabCase = (str) =>
    str
        .toLowerCase()
        .replace(/\s+/g, "-")

export const truncate = (str, length = 50) =>
    str.length > length ? str.slice(0, length) + "…" : str

export const slugify = (str) =>
    str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")