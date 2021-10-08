<template>
    <textarea
          @input="handleInput"
          :class="classes"
          :value="modelValue"
          :cols="cols"
          :rows="rows"
          :placeholder="placeholder"
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
import { classes } from "@/helpers/utils";
import store from "@/store";
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
    props: {
        modelValue: { type: String, required: true },
        cols: { type: String, default: "60" },
        rows: { type: String, default: "38" },
        class: { type: String, required: false }
    },
    emits: ["update:modelValue"],
    setup(props, context){
        const customStyle = {'font-family': store.read("font")};
        const handleInput = (e: Event) => {
            const target = <HTMLInputElement>e.target;
            context.emit("update:modelValue", target.value);
        }
        return {
            cols: props.cols,
            rows: props.rows,
            classes: classes("darkBg editor", props.class),
            handleInput,
            customStyle
        }
    }
});
</script>