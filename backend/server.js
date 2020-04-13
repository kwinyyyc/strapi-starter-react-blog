const strapi = require("strapi");
strapi({
  dir: process.cwd(),
  autoReload: process.env.NODE_ENV === "development",
}).start();
