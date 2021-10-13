import { SETTINGS } from "@/helpers/constants";

const fetchSettings = (): Record<string, any> => {
    try {
        const settings = window.localStorage.getItem("settings");
        if (settings) return JSON.parse(settings);
        return SETTINGS;
    } catch (error: any) {
        return SETTINGS;
    }
}

const read = (key: string) => {
    const settings = fetchSettings();
    return settings[key];
}

const write = (key: string, value: string | boolean) => {
    const settings = fetchSettings();
    settings[key] = value;
    window.localStorage.setItem("settings", JSON.stringify(settings));
}

const reset = () => {
    window.localStorage.setItem("settings", JSON.stringify(SETTINGS));
}

export default {
    fetchSettings,
    read,
    write,
    reset
}