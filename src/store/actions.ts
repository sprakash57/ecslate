import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "@/store/mutation";
import { State } from "./state";
import api from "@/helpers/api";

export enum ActionTypes {
  GetReleases = "GET_RELEASES",
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.GetReleases](context: ActionAugments): void;
};

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetReleases]({ commit }) {
    commit(MutationType.SetLoading, true);
    const data = await api.releases();
    commit(MutationType.SetLoading, false);
    commit(MutationType.SetReleases, data);
  },
};
