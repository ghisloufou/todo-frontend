<template>
  <div class="navbar">
    <div class="title">Tâches à faire</div>
    <!-- <div class="spacer"></div> -->
    <button>Ajouter une tâche</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "TheNavbar",
});
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  background-color: #1f1f1f;
  height: 70px;
  align-items: center;
}
.navbar .title {
  font-size: 2rem;
}
.spacer {
  flex: 1;
}
</style>
