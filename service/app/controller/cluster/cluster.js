"use strict";

const Controller = require("egg").Controller;

class Cluster extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      msg: "OK",
      data: [
        {
          clusterId: "f37W39btT6mxSWk8jRAhoQ0",
          clusterName: "集群1",
          state: "health",
          overview: [
            {
              overviewName: "overviewName1",
              overviewValue: "overviewValue1",
            },
            {
              overviewName: "overviewName1",
              overviewValue: "overviewValue1",
            },
            {
              overviewName: "overviewName1",
              overviewValue: "overviewValue1",
            },
            {
              overviewName: "overviewName1",
              overviewValue: "overviewValue1",
            },
          ],
          connectedServer: [
            {
              connectedServerName: "connectedServerName1",
              connectedServerValue: "connectedServerValue1",
            },
            {
              connectedServerName: "connectedServerName1",
              connectedServerValue: "connectedServerValue1",
            },
            {
              connectedServerName: "connectedServerName1",
              connectedServerValue: "connectedServerValue1",
            },
            {
              connectedServerName: "connectedServerName1",
              connectedServerValue: "connectedServerValue1",
            },
          ],
        },
      ],
    };
  }
}

module.exports = Cluster;
