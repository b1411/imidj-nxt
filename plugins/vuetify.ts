import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: "#197149",
                        secondary: "#0F2CB3",
                        "on-primary": "#FFFFFF",
                    },
                }
            }
        }
    });
    app.vueApp.use(vuetify);
});
