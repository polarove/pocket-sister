export const isBlank = (s: string): boolean => {
    return s == null || s == undefined || s.trim() === '' || s.length === 0
}
