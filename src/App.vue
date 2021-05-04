<template>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <Home />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/TodoList.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Home,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cad1d8;
  margin-top: 60px;
}
body {
  background-color: #121212;
}
.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
