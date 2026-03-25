const { cpSync, existsSync, rmSync } = require("fs");
const { resolve } = require("path");
const { defineConfig } = require("vite");

const rootDir = __dirname;
const staticDirs = ["css", "fonts", "images", "js"];

const pageInputs = [
  "index.html",
  "services.html",
  "insights-index.html",
  "contact-us.html",
];

const input = Object.fromEntries(
  pageInputs.map((pageName) => [pageName.replace(/\.html$/, ""), resolve(rootDir, pageName)])
);

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input,
    },
  },
  plugins: [
    {
      name: "copy-legacy-static-folders",
      closeBundle() {
        const distDir = resolve(rootDir, "dist");

        staticDirs.forEach((dirName) => {
          const sourceDir = resolve(rootDir, dirName);
          const targetDir = resolve(distDir, dirName);

          if (!existsSync(sourceDir)) {
            return;
          }

          rmSync(targetDir, { recursive: true, force: true });
          cpSync(sourceDir, targetDir, { recursive: true });
        });
      },
    },
  ],
});
