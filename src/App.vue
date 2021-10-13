<template>
  <Navbar />
  <Modal :isOpen="isOpen">
    <h1>Dummy Header</h1>
    <p>With dummy content</p>
  </Modal>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import Modal from "@/components/Modal.vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Navbar,
    Modal,
  },
  setup() {
    const store = useStore();
    const isOpen = ref(false);
    const toggleModal = () => {
      isOpen.value = !isOpen.value;
    };
    onMounted(() => {
      document.body.style.fontFamily = store.getters.readSetting("font");
      toggleModal();
    });
    return {
      isOpen: isOpen.value,
    };
  },
});
</script>

