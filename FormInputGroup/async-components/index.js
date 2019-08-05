import asyncComponents from "./index.vue";
export default {
  install(Vue) {
    Vue.component("async-components", asyncComponents);
  }
};
