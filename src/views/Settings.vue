<template>
  <section class="darkBg">
    <h3>
      <Dropdown :default="selected" :onClick="handleClick" label="Font" :options="options"/>
    </h3>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Dropdown from '@/components/common/Dropdown.vue';
import store from '@/store';

export default defineComponent({
  components: {
    Dropdown
  },
  setup() {
    const selected = store.read("font");
    const handleClick = (option: string) => {
      store.write("font", option);
      document.body.style.fontFamily = option;
    }
    return {
      handleClick,
      selected,
      options: ['monospace', 'serif']
    }
  },
})
</script>
