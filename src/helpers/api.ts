import { SETTINGS } from "@/helpers/constants";
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
      "https://api.github.com/repos/sprakash57/create-react-saga/releases"
    );
    const releases = (await response.json()) as Release[];
    return releases.slice(0, 2);
  } catch {
    return [
      {
        tag_name: "1.0.0",
        created_at: "2021-10-17T17:09:47Z",
        body: "Not able to fetch",
      },
      {
        tag_name: "0.9.0",
        created_at: "2021-10-07T17:09:47Z",
        body: "Not able to fetch",
      },
    ];
  }
};

export default {
  fetchSettings,
  read,
  write,
  reset,
  releases,
};
