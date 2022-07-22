const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            [
              "postcss-px-to-viewport",
              {
                viewportWidth: 375,
              },
            ],
          ],
        },
      },
    },
  },
});
