<template>
    <label class="switch" for="switch">
        <input 
            type="checkbox" 
            id="switch"
            @change="onChange" 
            :checked="checked"
        >
        <span class="slider" />
    </label>
</template>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 37px;
  height: 21px;
}
.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  box-shadow: 3px 3px 4px hsl(210, 28%, 21%), -3px -2px 4px hsl(210, 18%, 33%);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  background-color: #ccc;
  -webkit-transition: .3s;
  transition: .3s;
}
.slider:before {
    position: absolute;
    content: "";
    top: 3px;
    left: 3px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: var(--gray);
    transition: .3s;
}
input:checked + .slider {
  background-color: var(--green100);
}
input:focus + .slider {
  box-shadow: 3px 3px 4px hsl(210, 28%, 21%), -3px -2px 4px hsl(210, 18%, 33%);
}
input:checked + .slider:before {
  -webkit-transform: translateX(15px);
  -ms-transform: translateX(15px);
  transform: translateX(15px);
  background-color: var(--gray);
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        onChange: Function,
        checked: Boolean
    },
    setup(props) {
        return {
            checked: props.checked
        }
    },
})
</script>
