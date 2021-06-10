<template>
  <div class="todo-wrapper">
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
  /* background-color: hsl(0, 0%, 19%); */
  transition: background-color ease 0.05s;
  height: 3rem;
  cursor: pointer;
  margin: 3px;
  padding: 0px 0px 0px 2rem;
  border-radius: 3px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  text-align: left;
}
.todo-wrapper:hover {
  background-color: hsla(0, 0%, 19%, 30%);
}
.todo-content {
  flex: 1;
}
.button-wrapper {
  /* display: none; */
  display: flex;
  flex-direction: column;
}
.todo-wrapper:hover .button-wrapper {
  display: flex;
}
.button-wrapper button {
  background-color: hsl(0, 0%, 30%);
  padding: 2px 8px;
  margin: 2px 0 2px 5px;
  transition: background-color ease 0.15s;
}
.todo-wrapper:hover button {
  background-color: hsl(0, 0%, 50%);
}
@media screen and (max-width: 550px) {
  .todo-wrapper {
    flex-direction: column;
  padding: 0px 0px 0px 1rem;
  }
  .button-wrapper {
    flex-direction: row;
  }
}
#ghis:hover {
  color: hsl(219, 70%, 40%);
  /* text-shadow: rgb(197, 197, 197) 0px 0px 2px; */
}
#pau:hover {
  color: hsl(271, 60%, 43%);
  /* text-shadow: rgb(197, 197, 197) 0px 0px 2px; */
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
