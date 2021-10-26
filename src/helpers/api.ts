import { VERSION, SETTINGS } from "@/helpers/constants";
import { Release } from "@/store/state";

const fetchSettings = (): Record<string, any> => {
  try {
    const settings = window.localStorage.getItem("settings");
    if (settings) return JSON.parse(settings);
    reset();
    return SETTINGS;
  } catch (error) {
    reset();
    return SETTINGS;
  }
};

const read = (key: string) => {
  const settings = fetchSettings();
  return settings[key];
};

const write = (key: string, value: string | boolean) => {
  const settings = fetchSettings();
  settings[key] = value;
  window.localStorage.setItem("settings", JSON.stringify(settings));
};

const reset = () => {
  window.localStorage.setItem("settings", JSON.stringify(SETTINGS));
};

const releases = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/sprakash57/ecslate/releases"
    );
    const releases = (await response.json()) as Release[];
    return releases;
  } catch {
    return VERSION;
  }
};

const setPersistedVersion = (value: Release[]) => {
  window.localStorage.setItem("persistedVersion", JSON.stringify(value));
};

const getPersistedVersion = () => {
  const version = window.localStorage.getItem("persistedVersion");
  if (version) return JSON.parse(version)[0];
  return false;
};

export default {
  fetchSettings,
  read,
  write,
  reset,
  releases,
  setPersistedVersion,
  getPersistedVersion,
};
