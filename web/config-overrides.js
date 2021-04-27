const {
  override,
  fixBabelImports,
  adjustStyleLoaders,
  addLessLoader,
  addWebpackAlias,
} = require("customize-cra");
const path = require('path')

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    // 自定义antd主题色
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#333fff", // 全局主色
      "@link-color": "#333fff", // 链接色
      // "@success-color": "#52c41a", // 成功色
      "@warning-color": "#ffb140", // 警告色
      "@error-color": "#ff4f4d", // 错误色
      "@font-size-base": "14px", // 主字号
      "@text-color-secondary": "#646464", // 次文本色
      "@btn-danger-bg": "#ff4f4d",
      "@btn-danger-border": "#ff4f4d",
    },
  }),
  adjustStyleLoaders(rule => {
    // 配置scss全局变量
    if (rule.test.toString().includes("scss")) {
      rule.use.push({
        loader: require.resolve("sass-resources-loader"),
        options: {
          resources: "./src/assets/styles/global.scss",
        },
      });
    }
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "./src"),
  })
);
