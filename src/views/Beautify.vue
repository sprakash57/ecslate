<template>
  <main class="container">
    <section class="fields">
      <div class="fields__io">
        <TextArea v-model="editor" placeholder="Type ugly..." />
      </div>
      <div class="fields__btn">
        <Button :onClick="runBeautifier" title="Beautify">
          <img src="@/assets/icon/swap.svg" alt="Beautify" />
        </Button>
        <Button :onClick="clearEditor" title="Reset">
          <img src="@/assets/icon/reset.svg" alt="Reset" />
        </Button>
        <Dropdown
          :options="options"
          :onClick="selectInputType"
          :value="selectedOption"
        />
      </div>
      <div class="fields__io">
        <Clipboard />
        <div ref="output" class="darkBg fields__io__output" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
.fields {
  display: flex;
  width: 90%;
  min-width: 900px;
}
.fields__io {
  width: 100%;
  position: relative;
}
.fields__btn {
  margin: 0 2rem;
  height: 200px;
  display: flex;
  flex-direction: column;
}
.fields__btn button {
  padding: 0.4rem;
  width: 100%;
}
.fields__btn > * {
  margin: 0.5rem 0;
}
.fields__btn img {
  vertical-align: middle;
}
.fields__io__output {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Button, Clipboard, Dropdown, TextArea } from "@/components/common";
import YAML from "yaml";

export default defineComponent({
  components: {
    Button,
    Dropdown,
    TextArea,
    Clipboard,
  },
  setup() {
    const editor = ref("");
    const output = ref();
    let selectedOption = ref("JSON");
    const options = ["JSON", "YAML"];

    const selectInputType = (option: string) => {
      selectedOption.value = option;
    };

    const clearEditor = () => {
      editor.value = "";
      (<HTMLDivElement>output.value).innerHTML = "";
    };

    const getStrAsInputType = () => {
      switch (selectedOption.value) {
        case "YAML": {
          const inputAsYaml = YAML.parse(editor.value);
          return YAML.stringify(inputAsYaml);
        }
        default: {
          const inputAsJson = JSON.parse(editor.value);
          return JSON.stringify(inputAsJson, undefined, 2);
        }
      }
    };

    const runBeautifier = () => {
      try {
        (<HTMLDivElement>output.value).innerHTML = "";
        const preEl = document.createElement("pre");
        preEl.innerHTML = getStrAsInputType();
        (<HTMLDivElement>output.value).appendChild(preEl);
      } catch (error: any) {
        (<HTMLDivElement>output.value).innerHTML = error.message;
      }
    };

    return {
      editor,
      output,
      selectInputType,
      clearEditor,
      runBeautifier,
      options,
      selectedOption,
    };
  },
});
</script>