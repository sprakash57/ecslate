<template>
  <transition name="modal-animation">
    <section v-show="isOpen" class="modal">
        <div v-show="isOpen" class="modal-inner">
          <span @click="onClose">X</span>
          <slot />
          <button @click="onClose">Close</button>
        </div>
    </section>
  </transition>
</template>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  widows: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: wheat;
}
.modal-inner {
  position: relative;
  max-width: 640px;
  width: 80%;
  background-color: aquamarine;
}
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, .02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ["isOpen"],
  setup(_props, { emit }){
    const onClose = () => {
      emit("onClose");
    }
    return {
      onClose
    }
  }
});
</script>

