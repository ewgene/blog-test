import { Plugin } from "@nuxt/types";

import moment from "moment";
import Vue from "vue";

function formatDate(value: Date, locale: string, stringFormat: string): string {
  const strFormat = stringFormat || "L";
  return moment(value)
    .locale(locale)
    .format(strFormat);
}

declare module "@nuxt/types" {
  interface Context {
    $formatDate(value: Date, locale: string, stringFormat: string): string;
  }
}

const myPlugin: Plugin = context => {
  context.$formatDate = formatDate;
};
Vue.filter("formatDate", formatDate);

export default myPlugin;
