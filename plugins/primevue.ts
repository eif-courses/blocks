import {defineNuxtPlugin} from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import StyleClass from "primevue/styleclass";
import Ripple from "primevue/ripple";
import BadgeDirective from "primevue/badgedirective";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import FileUpload from "primevue/fileupload";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Fieldset from "primevue/fieldset";
import Avatar from "primevue/avatar";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.directive("styleclass", StyleClass)
    nuxtApp.vueApp.directive("ripple", Ripple)
    nuxtApp.vueApp.directive("badge", BadgeDirective)
    nuxtApp.vueApp.component("InputText", InputText)
    nuxtApp.vueApp.component("Checkbox", Checkbox)
    nuxtApp.vueApp.component("FileUpload", FileUpload)
    nuxtApp.vueApp.component("Accordion", Accordion)
    nuxtApp.vueApp.component("AccordionTab", AccordionTab)
    nuxtApp.vueApp.component("Fieldset", Fieldset)
    nuxtApp.vueApp.component("Avatar", Avatar)



    //other components that you need
});
