<template>
  <TheNavbar />
  <div class="content container">
    <TodoList title="Aujourd'hui" />
    <TodoList title="Demain" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavbar from "./components/TheNavbar.vue";
import TodoList from "./components/TodoList.vue";

export default defineComponent({
  name: "App",
  components: {
    TheNavbar,
    TodoList,
  },
});
</script>

<style>
#app {
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cad1d8;
  width: 100%;
  height: 100%;
  background-image: url(./assets/layered-waves-haikei2.svg);
  background-size: cover;
}
body {
  background-color: #171717;
  background-image: url(./assets/polygon-scatter-haikei.svg);
  background-size: cover;
}
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
* {
  box-sizing: border-box;
}
.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.container {
  padding: 0 2.5rem 0 8rem;
}
.carousel {
  display: flex;
  justify-content: space-evenly;
  height: fit-content;
  align-items: stretch;
  padding-bottom: 80px;
}
@media screen and (min-width: 900px) {
  .container {
    padding: 0 10rem;
  }
}
@media screen and (max-width: 550px) {
  #app {
    background-position-x: -64px;
  }
  .container {
    padding: 0 0.5rem 0 4rem;
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
  font-weight: 600;
}
button:hover {
  background-color: hsl(0, 0%, 60%);
}
</style>
