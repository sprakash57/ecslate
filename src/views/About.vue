<template>
  <main>
    <header class="header">
      <h1>Ecslate</h1>
      <img src="@/assets/ecslate.png" alt="Brand logo">
      <p>A utility app for Web Developer by Web Developer</p>
      <small>{{ version }}</small>
    </header>
    <section class="darkBg description">
      <div>
        <h3>What's new in {{ version }}</h3>
        <small>Last updated on Oct 18, 2021</small>
      </div>
      <div>
        <h3>About this app</h3>
        <p>
          Ecslate is one stop shop all for your trivial yet important part of your
          daily development tasks. Remember beautifying your JSON/YAML file, or maybe comparing simple or
          complex entities. How about executing JavaScript code snippets to quickly test out some core piece of functionality. You used to do
          all at different places over the web and since you forgot to create an
          account it will be lost till you visit these pages again. No more struggle,
          since Ecslate colate all your tools in one box that you can play
          around without loosing track of your original work.
        </p>
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
  </main>
</template>

<style scoped>
.header {
  padding: 0.5rem;
  text-align: center;
}
.header h1 {
  font-size: 3rem;
  margin: 0 0 0.5rem 0;
}
.header img {
  width: 160px;
  box-shadow: -3px 2px 13px 0px rgb(0 0 0 / 30%);
  border-radius: 20px;
}
.header p {
  margin: 0.5rem 0;
}
.description {
  padding: 1rem;
  overflow: auto;
  max-height: 350px;
  border-radius: 5px;
}
</style>

<script lang="ts">
import { ActionTypes } from "@/store/actions";
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    // const loading = computed(() => store.state.loading);
    // onMounted(() => store.dispatch(ActionTypes.GetReleases));
    // const releases = computed(() => store.state.releases);
    return {
      version: store.getters.appVersion,
    };
  },
});
</script>

