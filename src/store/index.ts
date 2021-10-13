import { createStore } from "vuex";
import { state } from "./state";
import { mutations } from "./mutation";
import { getters } from "./getters";

const store = createStore({
  state,
  getters,
  mutations,
});

export default store;
