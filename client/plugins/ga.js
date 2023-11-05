import { createApp } from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag-next";

const app = createApp(App);

app.use(VueGtag, {
  property: {
    id: "G-SX64L9WTH1"
  }
});

app.mount("#app");