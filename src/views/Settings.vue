<template>
  <section class="darkBg">
    <Dropdown
      :default="selectedFont"
      :onClick="onSelectFont"
      label="Font"
      :options="fonts"
    />
    <Dropdown
      :default="selectedSlate"
      :onClick="onSelectSlate"
      label="Default Slate"
      :options="slates"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown from "@/components/common/Dropdown.vue";
import store from "@/store";
import { ROUTES, FONTS } from "@/helpers/constants";

export default defineComponent({
  components: {
    Dropdown,
  },
  setup() {
    const settings = store.fetchSettings();
    const onSelectFont = (option: string) => {
      store.write("font", option);
      document.body.style.fontFamily = option;
    };
    const onSelectSlate = (option: string) => {
      store.write("defaultSlate", option);
    };
    return {
      onSelectFont,
      onSelectSlate,
      selectedFont: settings.font,
      selectedSlate: settings.defaultSlate,
      fonts: FONTS,
      slates: ROUTES.map((route) => route.name),
    };
  },
});
</script>
