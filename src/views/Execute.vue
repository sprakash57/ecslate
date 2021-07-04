<template>
  <main class="container">
    <section class="section">
      <h2>Editor</h2>
      <button @click="runEditor">Run</button>
      <button @click="clearEditor">Clear</button>
      <textarea v-model="editor" name="editor" cols="60" rows="38" />
    </section>
    <section class="section">
      <h2>Output</h2>
      <button @click="clearOutput">Clear</button>
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

export default defineComponent({
  name: "Execute",
  setup() {
    const editor = ref("");
    const output = ref();

    const clearEditor = () => {
      editor.value = "";
    };

    const clearOutput = () => {
      (<HTMLDivElement>output.value).innerHTML = "";
    };

    const runEditor = (): void => {
      clearOutput();
      (function (): void {
        function createLogNode(message: string): HTMLDivElement {
          const node = document.createElement("div");
          const textNode = document.createTextNode(message);
          node.appendChild(textNode);
          return node;
        }
        console.log = function (): void {
          const args = Array.prototype.slice.call(arguments);
          args.forEach((arg) => {
            const node = createLogNode(arg);
            (<HTMLDivElement>output.value).appendChild(node);
          });
        };
        window.onerror = function (message, _, lineno, colno): void {
          console.log(`${message} on line ${lineno} and column ${colno}.`);
        };
      })();
      /**
       * Though its fine for now, but you might wanna check repl module
       */
      console.log(eval(editor.value));
    };

    return {
      editor,
      output,
      clearEditor,
      clearOutput,
      runEditor,
    };
  },
});
</script>
