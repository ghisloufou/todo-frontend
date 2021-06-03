<template>
  <div class="container todo-container">
    <button @click="addTodo"></button>
    <TodoListItem
      v-for="todo of todos"
      v-bind:key="todo.id"
      :text="todo.text"
      :emoji="todo.emoji"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoListItem from "./TodoListItem.vue";
export default defineComponent({
  name: "TodoList",
  components: {
    TodoListItem,
  },
  props: {},
  data() {
    return {
      todos: [
        { id: 1, text: "Changer l'eau du chat", emoji: "😜" },
        { id: 2, text: "Arroser les plantes", emoji: "🤧" },
        { id: 3, text: "Faire la vaisselle", emoji: "🤤" },
      ],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        text: "test" + (this.todos.length + 1),
        emoji: "E",
      });
    },
  },
});
</script>

<style scoped>
.todo-container {
  /* background-color: rgb(21, 31, 23); */
  background-color: #212121;
  padding: 3px;
  border-radius: 6px;
  flex: 1;
}
</style>
