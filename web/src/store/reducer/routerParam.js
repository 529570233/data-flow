import { routerParam } from "../actionTypes";

export default function saveRouterParam(state = {}, action) {
  state = JSON.parse(JSON.stringify(state));
  let { type, payload } = action;
  console.log(payload)
  switch (type) {
    case routerParam:
      state.routerParam = payload;
  }
  return state;
}
