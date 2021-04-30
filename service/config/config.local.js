"use strict";

module.exports = appInfo => {
  const config = {};

  // 配置跨域
  config.security = {
    domainWhiteList: ["http://localhost:3000"],
  };
  config.cors = {
    origin: "http://localhost:3000",
    credentials: true,
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
  };

  return config;
};
