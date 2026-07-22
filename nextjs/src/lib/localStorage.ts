export const localStorage = () => {
    const setItem = (key: string, value: any) => {
        try {
            const serializedValue = JSON.stringify(value);
            window.localStorage.setItem(key, serializedValue);
        } catch (error) {
            console.error("Error setting item in localStorage:", error);
        }
    };

    const getItem = (key: string) => {
        try {
            const serializedValue = window.localStorage.getItem(key);
            return serializedValue ? JSON.parse(serializedValue) : null;
        } catch (error) {
            console.error("Error getting item from localStorage:", error);
            return null;
        }
    };
    return { setItem, getItem };
};