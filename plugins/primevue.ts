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
import Toast from "primevue/toast";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Toolbar from "primevue/toolbar";
import RadioButton from "primevue/radiobutton";
import InputNumber from "primevue/inputnumber";
import Dialog from "primevue/dialog";
// @ts-ignore
import ToastService from "primevue/toastservice/toastservice.esm";
import Dropdown from "primevue/dropdown";
import Rating from "primevue/rating";
import Tag from "primevue/tag";
import "public/flags.css";
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});

    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.component("Toast", Toast);

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
    nuxtApp.vueApp.component("DataTable", DataTable)
    nuxtApp.vueApp.component("Column", Column)
    nuxtApp.vueApp.component("Toolbar", Toolbar)
    nuxtApp.vueApp.component("RadioButton", RadioButton)
    nuxtApp.vueApp.component("InputNumber", InputNumber)
    nuxtApp.vueApp.component("Dialog", Dialog)
    nuxtApp.vueApp.component("Dropdown", Dropdown)
    nuxtApp.vueApp.component("Rating", Rating)
    nuxtApp.vueApp.component("Tag", Tag)
});
