const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const config = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  },
  sassLoaderOptions: {
    data: '@import "styles/variables.scss";@import "styles/mixin.scss";'
  }
};

module.exports = pipe(withImages, withSass)(config);
