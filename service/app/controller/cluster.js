"use strict";

const Controller = require("egg").Controller;

class Cluster extends Controller {
  get defaultData() {
    return {
      clusterMenuData: [
        {
          clusterId: "f37W39btT6mxSWk8jRAhoQ0",
          clusterName: "集群1",
        },
        {
          clusterId: "f37W39btT6mxSWk8jRAhoQ1",
          clusterName: "集群2",
        },
        {
          clusterId: "f37W39btT6mxSWk8jRAhoQ2",
          clusterName: "集群3",
        },
        {
          clusterId: "f37W39btT6mxSWk8jRAhoQ3",
          clusterName: "集群4",
        },
      ],
      clusterListData: [
        {
          clusterId: "f37W39btT6mxSWk8jRAhoQ0",
          clusterName: "集群1",
          state: "health",
          overview: [
            {
              overviewName: "overviewName1-1",
              overviewValue: "overviewValue1-1",
            },
            {
              overviewName: "overviewName1-2",
              overviewValue: "overviewValue1-2",
            },
            {
              overviewName: "overviewName1-3",
              overviewValue: "overviewValue1-3",
            },
            {
              overviewName: "overviewName1-4",
              overviewValue: "overviewValue1-4",
            },
          ],
          connectedServer: [
            {
              connectedServerName: "connectedServerName1-1",
              connectedServerValue: "connectedServerValue1-1",
            },
            {
              connectedServerName: "connectedServerName1-2",
              connectedServerValue: "connectedServerValue1-2",
            },
            {
              connectedServerName: "connectedServerName1-3",
              connectedServerValue: "connectedServerValue1-3",
            },
            {
              connectedServerName: "connectedServerName1-4",
              connectedServerValue: "connectedServerValue1-4",
            },
          ],
        },
        {
          clusterId: "f37W39btT6mxSWk8jRAhoQ1",
          clusterName: "集群2",
          state: "unhealth",
          overview: [
            {
              overviewName: "overviewName2-1",
              overviewValue: "overviewValue2-1",
            },
            {
              overviewName: "overviewName2-2",
              overviewValue: "overviewValue2-2",
            },
            {
              overviewName: "overviewName2-3",
              overviewValue: "overviewValue2-3",
            },
            {
              overviewName: "overviewName2-4",
              overviewValue: "overviewValue2-4",
            },
          ],
          connectedServer: [
            {
              connectedServerName: "connectedServerName2-1",
              connectedServerValue: "connectedServerValue2-1",
            },
            {
              connectedServerName: "connectedServerName2-2",
              connectedServerValue: "connectedServerValue2-2",
            },
            {
              connectedServerName: "connectedServerName2-3",
              connectedServerValue: "connectedServerValue2-3",
            },
            {
              connectedServerName: "connectedServerName2-4",
              connectedServerValue: "connectedServerValue2-4",
            },
          ],
        },
        {
          clusterId: "f37W39btT6mxSWk8jRAhoQ2",
          clusterName: "集群3",
          state: "unhealth",
          overview: [
            {
              overviewName: "overviewName3-1",
              overviewValue: "overviewValue3-1",
            },
            {
              overviewName: "overviewName3-2",
              overviewValue: "overviewValue3-2",
            },
            {
              overviewName: "overviewName3-3",
              overviewValue: "overviewValue3-3",
            },
            {
              overviewName: "overviewName3-4",
              overviewValue: "overviewValue3-4",
            },
          ],
          connectedServer: [
            {
              connectedServerName: "connectedServerName3-1",
              connectedServerValue: "connectedServerValue3-1",
            },
            {
              connectedServerName: "connectedServerName3-2",
              connectedServerValue: "connectedServerValue3-2",
            },
            {
              connectedServerName: "connectedServerName3-3",
              connectedServerValue: "connectedServerValue3-3",
            },
            {
              connectedServerName: "connectedServerName3-4",
              connectedServerValue: "connectedServerValue3-4",
            },
          ],
        },
      ],
    };
  }

  async clusterMenu() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      msg: "OK",
      data: this.defaultData.clusterMenuData,
    };
  }

  async clusterList() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      msg: "OK",
      data: this.defaultData.clusterListData,
    };
  }

  async searchCluster() {
    const { ctx } = this;
    let filterCluster = this.defaultData.clusterListData.filter(
      item => item.clusterName === ctx.query.clusterName
    );
    if (filterCluster.length > 0) {
      ctx.body = {
        code: 0,
        msg: "OK",
        data: filterCluster,
      };
    } else {
      ctx.body = {
        code: 1,
        msg: "OK",
      };
    }
  }
}

module.exports = Cluster;
