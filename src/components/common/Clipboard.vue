<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const clickToCopy = async (e: Event) => {
      try {
        const target = e.target as HTMLSpanElement;
        await navigator.clipboard.writeText(
          String(target.nextElementSibling?.textContent)
        );
        alert("Result copied to clipboard");
      } catch (error) {
        alert("Not able to copy");
      }
    };
    return {
      clickToCopy,
    };
  },
});
</script>

<template>
  <span class="copy" role="button" @click="clickToCopy">Copy</span>
</template>

<style scoped>
.copy {
  position: absolute;
  right: 4px;
  top: 4px;
  font-weight: 800;
  color: var(--green200);
  cursor: pointer;
}
</style>