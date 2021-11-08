<template>
  <main class="darkBg container">
    <section class="container__section">
      <div>
        <Switch :onChange="handleChange" :checked="settings.hasWelcomePage" />
        <p class="section__label">Show welcome page when app boots up.</p>
      </div>
      <div>
        <Dropdown
          width="120px"
          :selectorStyle="customStyle"
          :dropdownStyle="customStyle"
          :value="selectedValue"
          :onClick="handleFontChange"
          :options="fonts"
        />
        <p class="section__label">Select font system that soothes your eyes.</p>
      </div>
      <div>
        <p class="section__label" style="margin-left: 0; margin-right: 0.5rem">
          Help and support is available
        </p>
        <ExternalLink
          url="https://github.com/sprakash57/ecslate/discussions"
          label="here"
          class="extLink"
        />
      </div>
      <div>
        <p class="section__label" style="margin-left: 0; margin-right: 0.5rem">
          Need your way around? Follow this
        </p>
        <ExternalLink
          url="https://sprakash.github.io/ecslate"
          label="Guide"
          class="extLink"
        />
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
.extLink {
  border-radius: 10px;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Dropdown, Switch, Button, ExternalLink } from "@/components/common";
import { useStore } from "vuex";
import { FONTS } from "@/helpers/constants";
import { MutationType } from "@/store/mutation";

export default defineComponent({
  components: {
    Dropdown,
    Switch,
    Button,
    ExternalLink,
  },
  setup() {
    const store = useStore();
    const settings = store.state.settings;
    const selectedValue = ref(settings.font);
    const handleReset = () => {
      store.commit(MutationType.ResetSettings);
      settings.hasWelcomePage = true;
      handleFontChange("monospace");
    };
    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      settings.hasWelcomePage = target.checked;
      store.commit(MutationType.WriteSetting, {
        key: "hasWelcomePage",
        value: target.checked,
      });
    };
    const handleFontChange = (option: string) => {
      selectedValue.value = option;
      store.commit(MutationType.WriteSetting, { key: "font", value: option });
      document.body.style.fontFamily = option;
    };
    const customStyle = {
      background: "var(--green100)",
      boxShadow:
        "3px 3px 4px hsl(210, 28%, 21%), -3px -2px 4px hsl(210, 18%, 33%)",
      width: "120px",
      fontWeight: "500",
      textTransform: "capitalize",
    };
    return {
      handleReset,
      handleFontChange,
      handleChange,
      fonts: FONTS,
      settings,
      selectedValue,
      customStyle,
    };
  },
});
</script>
