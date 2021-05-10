import { routerParam } from "../actionTypes";

let routerParamAction = {
  saveRouterParam(payload) {
    return {
      type: routerParam,
      payload,
    };
  },
};

export default routerParamAction;
