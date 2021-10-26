<template>
  <textarea
    @input="handleInput"
    :class="classes"
    :value="modelValue"
    :cols="cols"
    :rows="rows"
    :style="customStyle"
  />
</template>

<style scoped>
.editor {
  resize: none;
  width: 100%;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { classes } from "@/helpers/utils";

export default defineComponent({
  props: {
    modelValue: { type: String, required: true },
    cols: { type: String, default: "60" },
    rows: { type: String, default: "38" },
    class: { type: String, required: false },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const store = useStore();
    const handleInput = (e: Event) => {
      const target = <HTMLInputElement>e.target;
      emit("update:modelValue", target.value);
    };
    return {
      cols: props.cols,
      rows: props.rows,
      classes: classes("darkBg editor", props.class),
      handleInput,
      customStyle: { "font-family": store.getters.readSetting("font") },
    };
  },
});
</script>