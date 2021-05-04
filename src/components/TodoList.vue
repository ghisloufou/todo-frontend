<template>
  <div class="container">
    <h1>Todo</h1>
    <ul>
      <li v-for="test of ['Changer l\'eau du chat', 'Arroser les plantes', 'Faire la vaisselle']" v-bind:key="test">
        <Todo :emoji="'☺'" :title="test" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Todo from "./Todo.vue";
export default defineComponent({
  name: "TodoList",
  components: {
    Todo,
  },
  props: {},
});
</script>

<style scoped>
.container {
  padding: 0 30px;
}
ul {
  /* background-color: rgb(21, 31, 23); */
  background-color: hsl(0, 0%, 13%);
  padding: 3px;
  list-style-type: none;
  border-radius: 6px;
}
li {
  margin: 3px;
}
</style>
