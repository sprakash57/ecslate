<template>
  <main class="container">
    <section class="fields">
      <div class="fields__input">
        <TextArea v-model="compareTo" rows="19" placeholder="Compare to..." />
        <TextArea
          v-model="compareFrom"
          rows="19"
          placeholder="Compare From..."
        />
      </div>
      <div class="fields__btn">
        <Button :onClick="runCompare" title="Compare">
          <img src="@/assets/icon/compare.svg" alt="Compare" />
        </Button>
        <Button :onClick="resetFields" title="Reset">
          <img src="@/assets/icon/reset.svg" alt="Reset" />
        </Button>
        <Dropdown
          :options="['Text', 'Object']"
          :default="Text"
          :onClick="selectInputType"
        />
      </div>
      <div class="fields__output">
        <Clipboard />
        <pre ref="output" class="darkBg" />
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
.fields__input {
  width: 100%;
  height: 100%;
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
.fields__btn img {
  vertical-align: middle;
}
.fields__btn > * {
  margin: 0.5rem 0;
}
.fields__output {
  width: 100%;
  display: flex;
  overflow-y: auto;
  position: relative;
}
.fields__output pre {
  margin: 0;
  width: 100%;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Button, Dropdown, TextArea, Clipboard } from "@/components/common";

const Diff = require("diff");

export default defineComponent({
  components: {
    Button,
    Dropdown,
    TextArea,
    Clipboard,
  },
  setup() {
    const output = ref();
    const compareTo = ref("");
    const compareFrom = ref("");
    let selectedOption = "text";

    const resetFields = () => {
      (<HTMLDivElement>output.value).innerHTML = "";
      compareTo.value = "";
      compareFrom.value = "";
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
        diff = Diff.diffLines(compareTo.value, compareFrom.value);
      } else {
        diff = Diff.diffChars(compareTo.value, compareFrom.value);
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
      compareTo,
      compareFrom,
      selectInputType,
      resetFields,
      runCompare,
    };
  },
});
</script>
