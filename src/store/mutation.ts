import { SETTINGS } from "@/helpers/constants";
import { MutationTree } from "vuex";
import api from "@/helpers/api";
import { Release, State } from "./state";

export enum MutationType {
  WriteSetting = "WRITE_SETTING",
  ResetSettings = "READ_SETTINGS",
  SetLoading = "SET_LOADING",
  SetReleases = "SET_RELEASES",
}

export type Mutations = {
  [MutationType.WriteSetting](
    state: State,
    item: { key: string; value: string | boolean }
  ): void;
  [MutationType.ResetSettings](state: State): void;
  [MutationType.SetLoading](state: State, isLoading: boolean): void;
  [MutationType.SetReleases](state: State, releases: Release[]): void;
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
  [MutationType.SetLoading](state, isLoading) {
    state.loading = isLoading;
  },
  [MutationType.SetReleases](state, releases) {
    state.releases = releases;
  },
};
