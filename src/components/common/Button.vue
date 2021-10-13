<template>
  <button :class="classes" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { classes } from "@/helpers/utils";

export default defineComponent({
  props: {
    onClick: Function,
    className: { type: String, required: false },
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
  font-weight: 700;
  font-size: 0.9rem;
  border: none;
  background: none;
  padding: 0.8rem;
  margin: 0.5rem;
  box-shadow: 3px 3px 4px hsl(153, 52%, 42%), -3px -2px 4px hsl(153, 46%, 59%);
  border-radius: 1rem;
  color: white;
  min-width: 60px;
}
.btn:active {
  outline: none;
  box-shadow: inset 3px 3px 4px hsl(153, 51%, 38%),
    4px 4px 4px hsl(153, 45%, 63%);
}
.btn:hover {
  cursor: pointer;
}
.btn:focus {
  outline: none;
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>