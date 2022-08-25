import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN as string, // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: process.env.MICROCMS_APIKEY as string,
});
