import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "sugya",
  apiKey: process.env.API_KEY || "",
});
