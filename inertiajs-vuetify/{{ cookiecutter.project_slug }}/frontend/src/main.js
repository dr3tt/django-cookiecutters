import "vite/modulepreload-polyfill";
import axios from "axios";
import { createApp, defineAsyncComponent, h } from "vue";
import { createPinia } from "pinia";
import { createInertiaApp } from "@inertiajs/vue3";
import vuetify from "./plugins/vuetify";
import reverseUrl from "./plugins/reverseUrl";
import goTo from "./plugins/goTo";
import { loadFonts } from "./plugins/webfontloader";

import "@/src/styles/main.scss";


loadFonts();

const DefaultLayout = defineAsyncComponent(() => import("./layouts/DefaultLayout.vue"));

const pages = import.meta.glob("./pages/**/*.vue");

const pinia = createPinia();

document.addEventListener("DOMContentLoaded", () => {
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.headers.put["Content-Type"] = "application/json";
  axios.defaults.headers.post["Content-Type"] = "application/json";

  createInertiaApp({
    resolve: async (name) => {
      // console.log("resolve page name: " + name);
      const page = (await pages[`./pages/${name}.vue`]()).default;
      page.layout = page.layout || DefaultLayout;
      return page;
    },
    setup({ el, App, props, plugin }) {
      createApp({ render: () => h(App, props) })
        .use(plugin)
        .use(pinia)
        .use(reverseUrl)
        .use(goTo)
        .use(vuetify)
        .mount(el);
    },
  });
});
