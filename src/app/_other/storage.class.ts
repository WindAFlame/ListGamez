export class Storage {

    public static has(key: string): boolean {
        return !!localStorage.getItem(key.toString());
    }

    public static get(key: string): string {
        return localStorage.getItem(key.toString());
    }

    public static set(key: string, value: string) {
        localStorage.setItem(key.toString(), value);
    }

    public static clean(key?: string) {
        if (key !== undefined && Storage.has(key)) {
            localStorage.removeItem(key.toString());
        }
    }

}
