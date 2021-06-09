import { createApp } from "vue";
import App from "./App.vue";
import VueFinalModal from "vue-final-modal";

const app = createApp(App);
app.use(VueFinalModal());
app.mount("#app");
