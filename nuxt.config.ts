// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    css: [
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css'],
    build: {
        transpile: ["primevue", "vue-i18n"],
    },
    ssr: false,
    modules: ['@pinia/nuxt',
        '@nuxtjs/i18n',
    ],
    i18n: {
        locales: [
            {
                code: "en-US",
                name: "English",
                iso: "en-US",
                dir: "ltr",
                file: "en-US.ts",
            },
            {
                code: "lt-LT",
                name: "Lietuvių",
                iso: "lt-LT",
                dir: "ltr",
                file: "lt-LT.ts",
            },
        ],
        langDir: "lang",
        defaultLocale: "en-US",
        vueI18n: './i18n.config.ts' // if you are using custom path, default
    },
    // },
    pinia: {
        autoImports: [
            // automatically imports `useAuthStore`
            'useAuthStore', // import { useAuthStore } from 'pinia'
            // ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
})
