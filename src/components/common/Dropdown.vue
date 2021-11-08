<template>
  <div class="dropdown">
    <label v-if="label" class="dropdown__label" for="selector">{{
      label
    }}</label>
    <div
      id="selector"
      class="selector"
      :style="selectorStyle"
      :tabindex="tabindex"
      @blur="open = hasOpen"
    >
      <div class="selected" @click="open = !open">
        {{ value || options[0] }}
      </div>
      <div class="items" :class="{ selectHide: !open }" :style="dropdownStyle">
        <div
          v-for="option of options"
          :key="option"
          @click="handleClick(option)"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    value: String,
    label: String,
    onClick: { type: Function, required: true },
    hasOpen: { type: Boolean, default: false },
    options: { type: Array, required: true },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    width: { type: String, default: "90px" },
    selectorStyle: { type: Object, required: false },
    dropdownStyle: { type: Object, required: false },
  },
  setup(props) {
    const open = ref(false);
    const handleClick = (option: string) => {
      open.value = props.hasOpen;
      props.onClick(option);
    };
    return {
      label: props.label,
      open,
      handleClick,
      width: { width: props.width },
      selectorStyle: props.selectorStyle,
      dropdownStyle: props.dropdownStyle,
    };
  },
});
</script>

<style scoped>
.dropdown {
  display: flex;
  align-items: center;
}
.dropdown__label {
  margin-right: 1rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
}
.selector {
  position: relative;
  min-width: 90px;
  line-height: 45px;
  font-weight: 700;
  font-size: 0.9rem;
  border: none;
  outline: none;
  box-shadow: 3px 3px 4px hsl(153, 52%, 42%), -3px -2px 4px hsl(153, 46%, 59%);
  border-radius: 1rem;
  color: white;
  cursor: pointer;
}
.selector .selected {
  padding-left: 0.5rem;
}
.selector::after {
  box-shadow: inset 3px 3px 4px hsl(153, 51%, 38%),
    4px 4px 4px hsl(153, 45%, 63%);
}
.selector .selected:after {
  position: absolute;
  content: "";
  top: 20px;
  right: 1em;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}
.selector .items {
  color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  position: absolute;
  box-shadow: 3px 3px 4px hsl(153, 52%, 42%), -3px -2px 4px hsl(153, 46%, 59%);
  margin-top: 0.5rem;
  left: 0;
  right: 0;
  z-index: 1;
}
.selector .items div {
  color: #fff;
  padding: 0 0.5rem;
  cursor: pointer;
  user-select: none;
}
.selector .items div:not(:last-child) {
  border-bottom: 1px solid white;
}
.selector .items div:hover {
  background-color: var(--gray);
  transition: background-color 0.3s ease-in-out;
}
.selectHide {
  display: none;
}
</style>