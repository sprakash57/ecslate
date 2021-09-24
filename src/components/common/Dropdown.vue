<template>
  <div class="dropdown" :tabindex="tabindex" @blur="open = hasOpen">
    <div class="selected" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="option of options"
        :key="option"
        @click="
          selected = option;
          open = hasOpen;
          onClick(option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onClick: Function,
    hasOpen: { type: Boolean, default: false },
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
};
</script>

<style scoped>
.dropdown {
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
.dropdown .selected {
  padding-left: 0.5rem;
}
.dropdown::after {
  box-shadow: inset 3px 3px 4px hsl(153, 51%, 38%),
    4px 4px 4px hsl(153, 45%, 63%);
}

.dropdown .selected:after {
  position: absolute;
  content: "";
  top: 20px;
  right: 1em;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}
.dropdown .items {
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
.dropdown .items div {
  color: #fff;
  padding: 0 0.5rem;
  cursor: pointer;
  user-select: none;
}
.dropdown .items div:not(:last-child) {
  border-bottom: 1px solid white;
}
.dropdown .items div:hover {
  background-color: var(--gray);
  transition: background-color 0.3s ease-in-out;
}

.selectHide {
  display: none;
}
</style>