const cssNano = require('cssnano');
const presetEnv = require('postcss-preset-env');

module.exports = {
    plugins: [
        presetEnv({
            stage: 2,
            autoprefixer: false,
            // logical-properties-and-values: false,
        }),
        cssNano({ preset: "default"})
    ]
  }
  