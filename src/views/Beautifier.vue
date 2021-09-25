<template>
  <main class="container">
    <section style="margin: 1rem">
      <Dropdown :options="options" :onClick="selectInputType" default="JSON" />
    </section>
    <section class="fields">
      <div class="fields__io">
        <textarea
          v-model="editor"
          name="editor"
          cols="60"
          rows="38"
          class="darkBg fields__io__editor"
        />
      </div>
      <div class="fields__btn">
        <Button :onClick="runBeautifier" title="Beautify">
          <img src="@/assets/icon/swap.svg" alt="Beautify" />
        </Button>
        <Button :onClick="clearEditor" title="Reset">
          <img src="@/assets/icon/reset.svg" alt="Reset" />
        </Button>
      </div>
      <div class="fields__io">
        <div ref="output" class="darkBg field__io__output" />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "@/components/common/Button.vue";
import Dropdown from "@/components/common/Dropdown.vue";
import YAML from "yaml";

export default defineComponent({
  name: "Beautifier",
  components: {
    Button,
    Dropdown,
  },
  setup() {
    const options = ["JSON", "YAML"];
    const editor = ref("");
    const output = ref();
    let selectedOption: string = "json";

    const selectInputType = (option: string) => {
      selectedOption = option;
    };

    const clearEditor = () => {
      editor.value = "";
      output.value = "";
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
      options,
    };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fields {
  display: flex;
  width: 90%;
  min-width: 900px;
}
.fields__io__editor {
  resize: none;
  width: 100%;
}
.fields__io {
  width: 100%;
}
.fields__btn {
  display: flex;
  flex-direction: column;
  margin: auto 3rem;
}
.fields__btn button {
  border-radius: 20%;
  padding: 0.25rem;
}
.fields__btn img {
  vertical-align: middle;
}
.field__io__output {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>