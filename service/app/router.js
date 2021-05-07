'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/clusterList', controller.cluster.clusterList);
  router.get('/api/clusterMenu', controller.cluster.clusterMenu);
  router.get('/api/searchCluster', controller.cluster.searchCluster);
};
