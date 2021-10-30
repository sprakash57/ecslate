<template>
  <main>
    <header class="header">
      <h1>Ecslate<sup>{{ version }}</sup></h1>
      <img src="@/assets/ecslate.png" alt="Brand logo">
      <p>A utility app for Web Developers by Web Developer.</p>
    </header>
    <section class="darkBg description">
      <div class="description__latest">
        <h3>🎉 What's new in v{{ version }}</h3>
        <small>Last updated on {{ versionInfo.published_at }}</small>
        <pre v-html="versionInfo.body"/>
      </div>
      <div>
        <h3>📖 About this app</h3>
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
      <div>
        <h3>👷‍♂️ Developer contact</h3>
        <p>Hi there, This is Sunny. I am a web developer, blogger and a google guide. Apart from my day to day professional work 
          I love to contribute to open source community. You can reach out to me through my website "SUPRDEV" or you can follow my work at 
          different social media platforms, links down below.
        </p>
        <div class="social">
          <ExternalLink url="https://suprdev.netlify.app" icon="web" label="SUPRDEV" />
          <ExternalLink url="http://www.linkedin.com/in/sunny-prakash-3780ba49" icon="linkedin" label="LinkedIn" />
          <ExternalLink url="https://twitter.com/sunny_pr_" icon="twitter" label="Twitter" />
          <ExternalLink url="https://dev.to/sprakash57" icon="dev" label="Dev.to"/>
          <ExternalLink url="https://github.com/sprakash57" icon="github" label="GitHub"/>
        </div>
      </div>
      <div>
        <h3>💓 Support</h3>
        <p>I really want to keep this project alive by providing support and adding more features in future. All I need is support and and your feedback. 
          If you liked Ecslate or any of my project please support me by donating through Paypal or buying me a coffee. It will keep me motivated and get going. 
          You can find the links down below -
        </p>
        <div class="social">
          <ExternalLink url="https://www.paypal.me/sprakash57" icon="paypal" label="Paypal" />
          <ExternalLink url="https://www.buymeacoffee.com/sunnyprakash" icon="coffee" label="Buy Me Coffee" />
        </div>
      </div>
      <div class="update">
        <h4 v-if="newUpdate > version">🚀 A new version (v{{newUpdate}}) is available.</h4>
        <ExternalLink v-if="newUpdate > version" :url="downloadUrl" label="Download" :download="fileName" />
        <h4 v-if="newUpdate === version">👍 Awesome! you have the latest version.</h4>
        <h4 v-if="hasError">😕Something went wrong!</h4>
        <Button
          v-if="newUpdate === version || newUpdate === ''"
          :onClick="checkForUpdates"
          :disabled="loading"
          title="Reset"
          class="update__btn"
        >
        {{ loading ? "loading..." : hasError ? "Try Again" : "Check for updates" }}
        </Button>
      </div>
    </section>
  </main>
</template>

<style scoped>
.header {
  padding: 0.5rem;
  text-align: center;
  color: var(--gray);
}
.header h1 {
  font-size: 4rem;
  margin: 0 0 0.5rem 0;
  color: white;
  text-shadow: 2px 1px 3px var(--gray);
}
.header img {
  width: 140px;
  box-shadow: -3px 2px 13px 0px rgb(0 0 0 / 30%);
  border-radius: 20px;
}
.header p {
  margin: 0.5rem 0;
  color: white;
  text-shadow: 2px 1px 3px var(--gray);
  font-weight: 600;
}
.header sup {
  font-weight: 600;
  background: var(--gray);
  color: var(--green100);
  font-size: 0.8rem;
  padding: 0.4rem;
  border-radius: 10px;
  box-shadow: 3px 3px 4px hsl(153, 52%, 42%), -3px -2px 4px hsl(153, 46%, 59%);
}
.description {
  padding: 1rem 2rem;
  margin: 1rem 2rem;
  overflow: auto;
  border-radius: 15px;
}
.description p {
  font-size: 0.85rem;
  text-align: justify;
}
.description__latest {
  border-top: 2px dashed white;
  border-bottom: 2px dashed white;
}
.description__latest h3 {
  margin-bottom: 0;
}
.social {
  display: flex;
}
.update {
  margin-top: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.update h4 {
  margin-bottom: 0.5rem;
}
.update__btn {
  background: var(--gray);
  box-shadow: 3px 3px 4px hsl(210, 28%, 21%), -3px -2px 4px hsl(210, 18%, 33%);
}
.update__btn:active {
  box-shadow: inset 3px 3px 4px hsl(210, 28%, 18%),
    4px 4px 4px hsl(210, 17%, 33%);
}
</style>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { ExternalLink, Button } from "@/components/common";
import { ActionTypes } from "@/store/actions";

export default defineComponent({
  components: {
    ExternalLink,
    Button,
  },
  setup() {
    const store = useStore();
    const loading = computed(() => store.state.loading);
    const newUpdate = computed(() => store.state.newUpdate);
    const hasError = computed(() => store.state.hasError);
    const versionInfo = computed(() => store.getters.latestRelease);
    const checkForUpdates = () => {
      store.dispatch(ActionTypes.GetReleases, true);
    };
    const updateUrl = ref(
      `https://github.com/sprakash57/ecslate/releases/download/v${newUpdate.value}`
    );
    const fileName = ref(`Ecslate.Setup.${newUpdate.value}.exe`);
    const downloadUrl = updateUrl.value + "/" + fileName;

    return {
      version: store.state.version,
      versionInfo,
      checkForUpdates,
      loading,
      newUpdate,
      downloadUrl,
      hasError,
      fileName,
    };
  },
});
</script>

