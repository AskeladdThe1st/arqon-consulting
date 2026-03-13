const { readdirSync } = require("fs");
const { resolve } = require("path");
const { defineConfig } = require("vite");

const rootDir = __dirname;

const input = Object.fromEntries(
  readdirSync(rootDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
    .map((entry) => [entry.name.replace(/\.html$/, ""), resolve(rootDir, entry.name)])
);

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input,
    },
  },
});
