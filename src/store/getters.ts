import { GetterTree } from "vuex";
import { Release, State } from "./state";

export type Getters = {
  fetchSettings(state: State): Record<string, any>;
  readSetting(state: State): (key: string) => string | boolean;
  appVersion(state: State): string;
};

export const getters: GetterTree<State, State> & Getters = {
  fetchSettings: (state: State) => {
    return state.settings;
  },
  readSetting: (state: State) => (key: string) => {
    return state.settings[key] as string | boolean;
  },
  appVersion: (state: State) => {
    return state.version;
  },
};
