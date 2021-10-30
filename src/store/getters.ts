import { VERSION } from "@/helpers/constants";
import { formattedDate } from "@/helpers/utils";
import { GetterTree } from "vuex";
import { Release, State } from "./state";

export type Getters = {
  readSetting(state: State): (key: string) => string | boolean;
  latestRelease(state: State): Release;
};

export const getters: GetterTree<State, State> & Getters = {
  readSetting: (state: State) => (key: string) => {
    return state.settings[key] as string | boolean;
  },
  latestRelease: (state: State) => {
    const release =
      state.releases.find(
        (rel) => rel.name.replace("v", "") === state.version
      ) || VERSION[0];
    return {
      ...release,
      published_at: formattedDate(release.published_at),
    };
  },
};
