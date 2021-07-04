<template>
  <main class="container">
    <section class="rows">
      <div class="column">
        <h2>Editor 1</h2>
        <button @click="runCompare">Compare</button>
        <button @click="resetFields">Reset</button>
        <select name="inputType" @change="selectInputType">
          <option selected value="text">Text</option>
          <option value="object">Object</option>
        </select>
        <textarea v-model="editor1" name="editor" cols="60" rows="38" />
      </div>
      <div class="column">
        <h2>Editor 2</h2>
        <textarea v-model="editor2" name="output" cols="60" rows="38" />
      </div>
    </section>
    <section class="rows">
      <div class="column">
        <h2>Output</h2>
        <pre ref="output"></pre>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.column {
  width: 50%;
  padding: 0.5rem;
}
textarea {
  resize: none;
  width: 100%;
}
.rows {
  display: flex;
  flex-direction: row;
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
const Diff = require("diff");

export default defineComponent({
  name: "Comparator",
  setup() {
    const output = ref();
    const editor1 = ref("");
    const editor2 = ref("");
    let selectedOption = "text";

    const resetFields = () => {
      (<HTMLDivElement>output.value).innerHTML = "";
      editor1.value = "";
      editor2.value = "";
    };

    const selectInputType = (e: Event) => {
      const target = <HTMLSelectElement>e.target;
      selectedOption = target.value;
    };

    const runCompare = () => {
      (<HTMLDivElement>output.value).innerHTML = "";
      let span: HTMLSpanElement, diff;
      const fragment = document.createDocumentFragment();

      if (selectedOption === "object") {
        diff = Diff.diffLines(editor1.value, editor2.value);
      } else {
        diff = Diff.diffChars(editor1.value, editor2.value);
      }

      diff.forEach((part: Record<string, any>) => {
        const color = part.added
          ? "lightgreen"
          : part.removed
          ? "orange"
          : "white";
        span = document.createElement("span");
        span.style.background = color;
        span.appendChild(document.createTextNode(part.value));
        fragment.appendChild(span);
      });
      (<HTMLDivElement>output.value).appendChild(fragment);
    };

    return {
      output,
      editor1,
      editor2,
      selectInputType,
      resetFields,
      runCompare,
    };
  },
});
</script>
