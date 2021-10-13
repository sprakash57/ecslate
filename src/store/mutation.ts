import { SETTINGS } from "@/helpers/constants";
import { MutationTree } from "vuex";
import api from "@/helpers/api";
import { State } from "./state";

export enum MutationType {
  WriteSetting = "WRITE_SETTING",
  ResetSettings = "READ_SETTINGS",
}

export type Mutations = {
  [MutationType.WriteSetting](
    state: State,
    item: { key: string; value: string | boolean }
  ): void;
  [MutationType.ResetSettings](state: State): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.WriteSetting](state, { key, value }) {
    state.settings[key] = value;
    api.write(key, value);
  },
  [MutationType.ResetSettings](state) {
    state.settings = SETTINGS;
    api.reset();
  },
};
