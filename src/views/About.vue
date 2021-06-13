<template>
  <main class="container">
    <section class="section">
      <h2>Editor</h2>
      <button @click="runBeautifier">Run</button>
      <button @click="clearEditor">Clear</button>
      <select id="inputType" @change="selectInputType">
        <option selected value="json">JSON</option>
        <option value="yaml">YAML</option>
      </select>
      <textarea v-model="editor" name="editor" cols="60" rows="38" />
    </section>
    <section class="section">
      <h2>Output</h2>
      <div ref="output" class="output"></div>
    </section>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.section {
  width: 50%;
  padding: 0.5rem;
}
textarea {
  resize: none;
  width: 100%;
}
.output {
  width: 100%;
  background: white;
  height: 86%;
  outline: auto;
  max-height: 77vh;
  overflow-y: auto;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import YAML from "yaml";

export default defineComponent({
  name: "Beautifier",
  setup() {
    const editor = ref("");
    const output = ref();
    let selectedOption: string = "json";

    const selectInputType = (e: Event) => {
      const target = <HTMLSelectElement>e.target;
      selectedOption = target.value;
      console.log(selectedOption);
    };

    const clearEditor = () => {
      editor.value = "";
    };

    const getStrAsInputType = () => {
      switch (selectedOption) {
        case "yaml": {
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
      } catch (error) {
        (<HTMLDivElement>output.value).innerHTML = error.message;
      }
    };

    return {
      editor,
      output,
      selectInputType,
      clearEditor,
      runBeautifier,
    };
  },
});
</script>