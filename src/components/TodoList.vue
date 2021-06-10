<template>
  <div class="todo-container">
    <!-- <button class="add-button" @click="addTodo">Ajouter une tâche</button> -->
    <div class="todo-title">{{title}}</div>
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
  props: {
    title: {
      type: String,
      required: true,
    },
  },
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
  /* background-color: #212121; */
  padding: 3px;
  border-radius: 6px;
  flex: 1;
  margin-top: 1rem;
}
.todo-title {
  font-weight: 700;
  font-size: 1.6rem;
  font-variant: all-small-caps;
  text-align: left;
}
.add-button {
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}
.add-button:hover {
  background-color: #73b7fc;
  background-image: linear-gradient(62deg, #73b7fc 0%, #d2acfc 100%);
}
</style>
