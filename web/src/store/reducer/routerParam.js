import { routerParam } from "../actionTypes";

export default function routerParamReducer(state = {}, action) {
  state = JSON.parse(JSON.stringify(state));
  let { type, payload } = action;
  switch (type) {
    case routerParam:
      state.routerParam = payload;
      break;
    default:
      break;
  }
  return state;
}
