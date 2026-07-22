export const toKebabCase = (value: string) => {
    return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
};