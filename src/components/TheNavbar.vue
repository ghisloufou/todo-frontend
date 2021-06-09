<template>
  <div class="navbar">
    <vue-final-modal v-model="showModal" name="example">
      <span class="modal__title">Hello, vue-final-modal</span>
    </vue-final-modal>
    <div class="title">Tâches à faire</div>
    <!-- <div class="spacer"></div> -->
    <button class="add-task" @click="openTaskPanel">Ajouter une tâche</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "TheNavbar",
  data: () => ({
    showModal: false,
  }),
  methods: {
    openTaskPanel() {
      console.log("open panel");
      this.$vfm.show("example");
    },
    closeTaskPanel() {},
  },
});
</script>

<style scoped>
.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
}
.navbar {
  display: flex;
  justify-content: space-around;
  background-color: #1f1f1f;
  height: 70px;
  align-items: center;
}
.navbar .title {
  font-size: 2rem;
  font-weight: 500;
}
.add-task {
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}
.add-task:hover {
  background-color: hsl(210, 96%, 72%);
  background-image: linear-gradient(62deg, #73b7fc 0%, #d2acfc 100%);
}
.add-task:active {
  background-color: #5aabfc;
  background-image: linear-gradient(62deg, #5aabfc 0%, #c38efb 100%);
}
.spacer {
  flex: 1;
}
</style>
