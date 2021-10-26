<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["url", "icon", "label"],
  setup(props) {
    return {
      iconSrc: props.icon ? require(`@/assets/icon/${props.icon}.svg`) : "",
    };
  },
});
</script>

<template>
  <a :href="url" target="_blank" rel="noopener noreferrer" class="link">
    <img :src="iconSrc" alt="label" v-if="icon" />
    <span>{{ label }}</span>
  </a>
</template>

<style scoped>
.link {
  font-weight: 700;
  font-size: 0.9rem;
  border: none;
  background: var(--green100);
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  box-shadow: 3px 3px 4px hsl(210, 28%, 21%), -3px -2px 4px hsl(210, 18%, 33%);
  border-radius: 1rem;
  color: white;
  width: fit-content;
  display: flex;
  align-items: center;
  column-gap: 5%;
}
.link span {
  font-size: 0.7rem;
}
.link img {
  width: 25px;
}
</style>