// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        (_options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({ autoImport: true }));
            });
        },
        "@pinia/nuxt",
    ],
    ssr: true,
    css: ["~/assets/css/main.css"],
    tailwindcss: {
        cssPath: "~/assets/css/main.css",
    },
    build: {
        transpile: ["vuetify"],
    },
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            title: "IMIDZH.KZ - Интернет-магазин одежды и аксессуаров",
        },
    },
    // plugins: ["~/plugins/parse.js"],
});
