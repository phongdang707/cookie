// @flow
import type { Action } from "../types";
import type { AppData } from "../types/app_data";

const app_data = (state: AppData = {}, action: Action): AppData => {
  switch (action.type) {
    case "CHANGE_SHOP_PLAN":
      return {
        ...state,
        shop_plan: action.plan,
      };
    case "CHANGE_APP_PLAN":
      return {
        ...state,
        app_plan: action.plan,
      };
    case "SWITCH_PAGE":
      console.log("vao reducer");
      console.log("action.page", action.page);
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
};

export default app_data;
