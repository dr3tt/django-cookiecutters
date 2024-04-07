import reverseUrl from "@/src/helpers/routing";
import { router } from "@inertiajs/vue3";

export default {
  install: (app, options) => {
    app.config.globalProperties.$goTo = (urlName, ...args) => {
      const url = reverseUrl(urlName, ...args);
      router.visit(url);
    };
  },
};
