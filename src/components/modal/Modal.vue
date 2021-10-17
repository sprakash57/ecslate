<template>
  <transition name="animation">
    <section v-if="isOpen" class="overlay">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <Button
          @click="close"
          aria-label="Close modal"
          class="modal__close-icon"
          >x</Button
        >
        <slot />
        <Button @click="close" aria-label="Close modal" class="modal__close-btn"
          >Get Started</Button
        >
      </div>
    </section>
  </transition>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(0, 0%, 0%, 0.8);
  z-index: 9999;
}
.modal {
  width: 70vw;
  height: 95vh;
  min-width: 600px;
  min-height: 600px;
  border-radius: 20px;
  padding: 0.5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: var(--green100);
}
.modal__close-icon {
  border-radius: 50%;
  padding: 0.5rem;
  margin: 0;
  min-width: 35px;
}
.modal__close-btn {
  margin: 0.5rem auto;
  display: flex;
  width: 100%;
  justify-content: center;
}
.animation-enter-active,
.animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.animation-enter-from,
.animation-leave-to {
  opacity: 0;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "@/components/common";

export default defineComponent({
  components: {
    Button,
  },
  props: ["isOpen"],
  setup(_props, { emit }) {
    const close = () => {
      emit("close");
    };
    return {
      close,
    };
  },
});
</script>

