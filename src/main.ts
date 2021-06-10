import { createApp } from "vue";
import App from "./App.vue";
import VueFinalModal from "vue-final-modal";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlus)

createApp(App)
  .use(VueFinalModal())
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
