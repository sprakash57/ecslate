type DefaultSettings = { [key: string]: string | boolean };

const DEFAULT = {
    "disableWelcomePage": true,
    "defaultSlate": "Beautify",
    "font": "monospace"
}

const fetchSettings = (): DefaultSettings => {
    try {
        const settings = window.localStorage.getItem("settings");
        if (settings) return JSON.parse(settings);
        return DEFAULT;
    } catch (error: any) {
        return DEFAULT;
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
    window.localStorage.setItem("settings", JSON.stringify(DEFAULT));
}

export default {
    fetchSettings,
    read,
    write,
    reset
}