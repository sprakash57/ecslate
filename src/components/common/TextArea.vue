<template>
  <textarea
    class="editor"
    v-model="editor"
    :name="name"
    :cols="cols"
    :rows="rows"
  />
</template>

<style scoped>
.editor {
  box-shadow: inset 4px 4px 8px hsl(153, 10%, 9%),
    1px 1px 4px hsl(153, 76%, 93%);
  border-radius: 15px;
  background: var(--gray);
  border: none;
  padding: 0.8rem;
  resize: none;
  width: 100%;
  color: white;
}
</style>
<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    cols: { type: Number, default: 60 },
    rows: { type: Number, default: 38 },
    name: String,
    modalValue: String,
  },
  emits: ["update:modalValue"],
  setup(props, { emit }) {
    const editor = computed({
      get: () => props.modalValue,
      set: (val) => emit("update:modalValue", val),
    });
    return { editor };
  },
});
</script>
