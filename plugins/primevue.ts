import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import StyleClass from "primevue/styleclass";
import Ripple from "primevue/ripple";
import BadgeDirective from "primevue/badgedirective";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.directive("styleclass", StyleClass)
    nuxtApp.vueApp.directive("ripple", Ripple)
    nuxtApp.vueApp.directive("badge", BadgeDirective)
    //other components that you need
});
