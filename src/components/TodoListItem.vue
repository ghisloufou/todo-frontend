<template>
  <div class="todo-wrapper centered">
    <div class="todo-content">{{ emoji }} {{ text }}</div>
    <div class="button-wrapper">
      <button id="ghis">Fait par Ghis</button>
      <button id="pau">Fait par Pau</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "TodoListItem",
  props: {
    text: {
      type: String,
      required: true,
    },
    emoji: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.todo-wrapper {
  background-color: hsl(0, 0%, 19%);
  transition: background-color ease 0.05s;
  height: 3rem;
  cursor: pointer;
  margin: 3px;
  padding: 0px 5px;
  border-radius: 3px;
  justify-content: space-between;
}
.todo-wrapper:hover {
  background-color: hsl(0, 0%, 25%);
}
.todo-content {
  flex: 1;
}
.button-wrapper {
  display: none;
  flex-direction: column;
}
.todo-wrapper:hover .button-wrapper {
  display: flex;
}
.button-wrapper button {
  padding: 2px 8px;
  margin: 2px 0 2px 5px;
  transition: all ease 0.15s;
}
#ghis:hover {
  color: hsl(219, 70%, 50%);
}
#pau:hover {
  color: hsl(271, 60%, 53%);
}
#ghis:active {
  background-color: hsl(219, 70%, 50%);
  color: white;
}
#pau:active {
  background-color: hsl(271, 60%, 53%);
  color: white;
}
</style>
