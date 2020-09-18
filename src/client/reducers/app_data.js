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
      return {
        ...state,
        page: action.page,
      };
    case "CHANGE_STYLE_SELECTED":
      return {
        ...state,
        name: action.name,
      };
    case "CHANGE_SIDEBARLEFT":
      return {
        ...state,
        sidebaLeft: {
          ...state.sidebaLeft,
          showAll: action.sidebaLeft,
        },
      };
    case "CHANGE_COMPLIANCE":
      return {
        ...state,
        dataSetting: {
          ...state.dataSetting,
          content: {
            ...state.dataSetting.content,
            justTell: action.justTell,
          },
        },
      };
    case "CHANGE_CHILD_PAGE":
      console.log("action", action);
      let { name } = action;
      if (name == "message") {
        return {
          ...state,
          sidebaLeft: {
            ...state.sidebaLeft,
            message: action.value,
          },
        };
      }
    case "CHANGE_MESSAGE":
      return {
        ...state,
        dataSetting: {
          ...state.dataSetting,
          content: {
            ...state.dataSetting.content,
            message: {
              ...state.dataSetting.content.message,
              content: action.message,
            },
          },
        },
      };

    default:
      return state;
  }
};

export default app_data;
