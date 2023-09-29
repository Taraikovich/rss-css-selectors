export function isValidSelector(selector: string): boolean {
    try {
        document.querySelectorAll(selector);
        return true;
    } catch (error) {
        return false;
    }
}