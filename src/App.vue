<template>
  <TheNavbar />
  <div class="carousel centered">
    <TaskDay />
    <TaskDay />
    <TaskDay />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskDay from "./components/TaskDay.vue";
import TheNavbar from "./components/TheNavbar.vue";

export default defineComponent({
  name: "App",
  components: {
    TaskDay,
    TheNavbar,
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
}
body {
  background-color: #121212;
}
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
}
* {
  box-sizing: border-box;
}
.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  padding: 0 30px;
}
.carousel {
  display: flex;
  justify-content: space-evenly;
  height: fit-content;
  align-items: stretch;
  padding-bottom: 80px;
}
@media screen and (max-width: 1500px) {
  .carousel {
    flex-flow: column;
    align-items: center;
  }
}
button {
  border: none;
  background-color: grey;
  border-radius: 100px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all ease 0.05s;
  user-select: none;
}
button:hover {
  background-color: hsl(0, 0%, 60%);
}
</style>
