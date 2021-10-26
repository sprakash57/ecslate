<template>
  <Modal :isOpen="hasWelcomePage" @close="toggleModal">
    <header id="modalTitle">
      <h1>Welcome to Ecslate<sup>{{version}}</sup></h1>
      <img src="@/assets/ecslate.png" alt="Brandlogo">
      <p>A utility app for Web Developers by Web Developer</p>
    </header>
    <section id="modalDescription" class="darkBg">
      <div>
        <h3>What is it?</h3>
        <p>
          Ecslate is one stop shop all for your trivial yet important part of your
          daily development tasks. Remember beautifying your JSON/YAML file, or maybe comparing simple or
          complex entities. How about executing JavaScript code snippets to quickly test out some core piece of functionality. You used to do
          all at different places over the web and since you forgot to create an
          account it will be lost till you visit these pages again. No more struggle,
          since Ecslate colate all your tools in one box that you can play
          around without loosing track of your original work.</p>
      </div>
      <div>
        <h3>What's the solution?</h3>
        <p>
          Introducing Slates!! These let you do all your trivial tasks at one place with ease. Currently Ecslate has 
          <ul>
            <li>Beautify</li>
            <li>Compare</li>
            <li>Execution</li>
          </ul>
          with more slates coming in near future. Maybe I should stop spoiling the fun
          and let you explore it by yourself.
        </p>
      </div>
    </section>
  </Modal>
</template>

<style scoped>
#modalTitle {
  padding: 0.5rem;
  text-align: center;
}
#modalTitle h1 {
  font-size: 4rem;
  margin: 0 0 0.5rem 0;
  color: white;
  text-shadow: 2px 1px 3px var(--gray);
}
#modalTitle img {
  width: 140px;
  box-shadow: -3px 2px 13px 0px rgb(0 0 0 / 30%);
  border-radius: 20px;
}
#modalTitle p {
  margin: 0.5rem 0;
  color: white;
  text-shadow: 2px 1px 3px var(--gray);
  font-weight: 600;
}
#modalTitle sup {
  font-weight: 600;
  background: var(--gray);
  color: var(--green100);
  font-size: 0.8rem;
  padding: 0.4rem;
  border-radius: 10px;
  box-shadow: 3px 3px 4px hsl(153, 52%, 42%), -3px -2px 4px hsl(153, 46%, 59%);
}
#modalDescription {
  padding: 1rem;
  overflow: auto;
  max-height: 300px;
  border-radius: 5px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { Modal } from "@/components/modal";
import { useStore } from "@/store";

export default defineComponent({
  components: {
    Modal,
  },
  props: {
    hasWelcomePage: { type: Boolean, required: true },
    toggleModal: Function,
  },
  setup() {
    const store = useStore();
    return {
      version: store.state.version,
    };
  },
});
</script>
