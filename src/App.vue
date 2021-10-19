<template>
  <Navbar />
  <WelcomeModal :hasWelcomePage="hasWelcomePage" :toggleModal="toggleModal" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import { WelcomeModal } from "@/components/modal";
import { useStore } from "vuex";
import { ActionTypes } from "./store/actions";
import api from "./helpers/api";

export default defineComponent({
  components: {
    Navbar,
    WelcomeModal,
  },
  setup() {
    const store = useStore();
    const hasWelcomePage = ref(store.getters.readSetting("hasWelcomePage"));
    const toggleModal = () => {
      hasWelcomePage.value = !hasWelcomePage.value;
    };
    onMounted(() => {
      document.body.style.fontFamily = store.getters.readSetting("font");
      if (!api.getPersistedVersion()) store.dispatch(ActionTypes.GetReleases);
    });
    return {
      hasWelcomePage,
      toggleModal,
    };
  },
});
</script>

