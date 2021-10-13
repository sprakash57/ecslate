<template>
  <main class="darkBg container">
    <section class="container__section">
      <div>
        <Switch :onChange="handleChange" :checked="hasWelcomePage" />
        <p class="section__label">
          Toggle this switch if welcome page annoys you.
        </p>
      </div>
      <div>
        <Dropdown
          width="120px"
          :selectorStyle="customStyle"
          :dropdownStyle="customStyle"
          :default="selectedFont"
          :onClick="handleFontChange"
          :options="fonts"
        />
        <p class="section__label">Select font system that soothes your eyes.</p>
      </div>
    </section>
    <section class="container__reset">
      <Button
        :onClick="handleReset"
        title="Reset"
        class="container__reset__btn"
      >
        Default Settings
      </Button>
    </section>
  </main>
</template>

<style scoped>
.container {
  margin: 2rem;
  padding: 1rem;
  min-height: 400px;
  min-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.container__section > * {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.5rem;
}
.section__label {
  margin: 0 1rem;
  font-weight: bold;
}
.container__reset {
  align-self: center;
}
.container__reset__btn {
  background: var(--green100);
  box-shadow: 3px 3px 4px hsl(210, 28%, 21%), -3px -2px 4px hsl(210, 18%, 33%);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { Dropdown, Switch, Button } from "@/components/common";
import { useStore } from "vuex";
import { FONTS } from "@/helpers/constants";
import { MutationType } from "@/store/mutation";

export default defineComponent({
  components: {
    Dropdown,
    Switch,
    Button,
  },
  setup() {
    const store = useStore();
    const settings = store.getters.fetchSettings;
    let hasWelcomePage = settings.hasWelcomePage;
    const handleReset = () => {
      store.commit(MutationType.ResetSettings);
      window.location.reload();
    };
    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      hasWelcomePage = target.checked;
      store.commit(MutationType.WriteSetting, {
        key: "hasWelcomePage",
        value: hasWelcomePage,
      });
    };
    const handleFontChange = (option: string) => {
      store.commit(MutationType.WriteSetting, { key: "font", value: option });
      document.body.style.fontFamily = option;
    };
    const customStyle = {
      background: "var(--green100)",
      boxShadow:
        "3px 3px 4px hsl(210, 28%, 21%), -3px -2px 4px hsl(210, 18%, 33%)",
      width: "120px",
      fontWeight: "500",
    };
    return {
      handleReset,
      handleFontChange,
      handleChange,
      selectedFont: settings.font,
      fonts: FONTS,
      hasWelcomePage,
      customStyle,
    };
  },
});
</script>
