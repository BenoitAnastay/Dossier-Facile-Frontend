import Vue from "vue";
import Vuex from "vuex";
import i18n from "../i18n";

Vue.use(Vuex);

const MAIN_URL = `//${process.env.VUE_APP_MAIN_URL}`;

const localStore = localStorage.getItem("store");
const initialStore = localStore !== null ? JSON.parse(localStore) : {};

const store = new Vuex.Store({
  state: initialStore,
  mutations: {},
  actions: {
    setLang(_, lang) {
      i18n.locale = lang;
      const html = document.documentElement;
      html.setAttribute("lang", i18n.locale);
      const aYearFromNow = new Date();
      aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);
      Vue.$cookies.set(
        "lang",
        lang,
        aYearFromNow,
        "",
        MAIN_URL.endsWith("dossierfacile.fr") ? "dossierfacile.fr" : "localhost"
      );
    }
  },
  modules: {}
});

export default store;

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});
