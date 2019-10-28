module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components"
  ],
  plugins: [
    require("autoprefixer"),
    require("postcss-nested"),
    require("postcss-import"),
    require("postcss-preset-env")({
      features: {
        "nesting-rules": true
      }
    })
  ]
};
