<template>
<div class="todo-container">
  <div class="content centered">
    {{emoji}} {{title}}
  </div>
</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Todo',
  props: {
    title: {
      type: String,
      required: true
    },
    emoji: {
      type: String,
      required: true
    },
  },
})
</script>

<style scoped>
.todo-container {
  background-color: #202722;
  height: 100%;
  width: 100%;
}
.content {
  /* background-color: rgb(29, 37, 32); */
  background-color: hsl(0, 0%, 19%);
  height: 3rem;
  transition: background-color ease .05s;
}
.content:hover {
  /* background-color: rgb(45, 58, 50); */
  background-color: hsl(0, 0%, 25%);
  cursor: pointer;
}
</style>
