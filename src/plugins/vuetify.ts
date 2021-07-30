import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

import { fa } from "vuetify/src/locale";

export default new Vuetify({
  lang: {
    locales: { fa },
    current: "fa"
  },
  rtl: true,
  theme: {
    themes: {
      light: {
        primary: "#007BFF",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
});
