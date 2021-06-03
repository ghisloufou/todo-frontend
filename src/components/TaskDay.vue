<template>
  <div class="date">
    <div class="date-text">
      {{ date }}
    </div>
    <div class="content">
      <TodoList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "./TodoList.vue";
export default defineComponent({
  name: "TaskDay",
  components: {
    TodoList,
  },
  props: {},
  data() {
    return {
      date: "4 Nov. 2025",
    };
  },
});
</script>

<style scoped>
.date {
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.date-text {
  font-size: larger;
  font-weight: 600;
  padding: 20px 0;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
