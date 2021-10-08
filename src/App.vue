<template>
  <Navbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
import store from "./store";

export default defineComponent({
  components: {
    Navbar,
  },
  setup(){
    onBeforeMount(() => {
      const font = store.read("font");
      document.body.style.fontFamily = String(font);
    })
  }
});
</script>

