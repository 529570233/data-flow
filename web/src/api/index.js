import axios from "./config";

const { get } = axios;

// 头部导航
export const clusterMenu = () => get("/api/clusterMenu");
// home页面
export const clusterList = () => get("/api/clusterList");
export const searchCluster = val =>
  get("/api/searchCluster", { params: { clusterName: val } });
