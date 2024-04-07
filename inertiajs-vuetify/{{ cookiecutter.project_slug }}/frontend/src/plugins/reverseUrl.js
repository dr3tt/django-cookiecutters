import reverseUrl from "@/src/helpers/routing";

export default {
  install: (app, options) => {
    app.config.globalProperties.$reverseUrl = reverseUrl;
  },
};
