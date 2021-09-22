<template>
  <button :class="classes">{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { classes } from "@/helpers/utils";

export default defineComponent({
  props: {
    label: String,
    className: String,
  },
  setup(props) {
    return {
      classes: classes("btn", props.className),
    };
  },
});
</script>


<style scoped>
.btn {
  border: none;
  background: none;
  padding: 0.9rem;
  box-shadow: 3px 3px 4px var(--purple200), -3px -2px 4px var(--purple400);
  border-radius: 20px;
  color: white;
  min-width: 60px;
  font-family: "Mulish";
}
.btn:active {
  box-shadow: inset 3px 3px 4px var(--purple200), 4px 4px 4px var(--purple100);
}
.btn:hover {
  cursor: pointer;
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>