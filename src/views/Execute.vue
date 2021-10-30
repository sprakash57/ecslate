<template>
  <main class="container">
    <section class="fields">
      <div class="fields__io">
        <TextArea v-model="editor" placeholder="JavaScript snippet..." />
      </div>
      <div class="fields__btn">
        <Button :onClick="runEditor" title="Execute">
          <img src="@/assets/icon/execute.svg" alt="Execute" />
        </Button>
        <Button :onClick="resetFields" title="Reset">
          <img src="@/assets/icon/reset.svg" alt="Reset" />
        </Button>
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
  min-width: 90px;
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
import { Button, TextArea, Clipboard } from "@/components/common";

export default defineComponent({
  components: {
    Button,
    TextArea,
    Clipboard,
  },
  setup() {
    const editor = ref("");
    const output = ref();

    const resetFields = () => {
      editor.value = "";
      (<HTMLDivElement>output.value).innerHTML = "";
    };

    const runEditor = (): void => {
      (<HTMLDivElement>output.value).innerHTML = "";
      (function (): void {
        function createLogNode(message: string): HTMLParagraphElement {
          const node = document.createElement("p");
          node.style.margin = "0.5rem 0";
          if (message == undefined) {
            node.style.color = "hsl(60deg 0% 51%)";
          }
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
      const snippet = editor.value.concat(";console.log()"); // hide timer ids
      console.log(eval(snippet));
    };

    return {
      editor,
      output,
      resetFields,
      runEditor,
    };
  },
});
</script>
