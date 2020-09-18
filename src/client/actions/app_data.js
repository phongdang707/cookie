// @flow
import type { AppDataAction } from "../types/app_data";
import type { ThunkAction } from "../types";

export const changeShopPlan = (plan: string): AppDataAction => {
  return {
    type: "CHANGE_SHOP_PLAN",
    plan,
  };
};

export const changeAppPlan = (plan: string): AppDataAction => {
  return {
    type: "CHANGE_APP_PLAN",
    plan,
  };
};

export const switchPage = (page: number): AppDataAction => {
  return {
    type: "SWITCH_PAGE",
    page,
  };
};
export const changeStyleSelected = (name: string): AppDataAction => {
  return {
    type: "CHANGE_STYLE_SELECTED",
    name,
  };
};

export const changeSidebarLeft = (sidebaLeft: boolean): AppDataAction => {
  return {
    type: "CHANGE_SIDEBARLEFT",
    sidebaLeft,
  };
};

export const changeCompliance = (justTell: boolean): AppDataAction => {
  return {
    type: "CHANGE_COMPLIANCE",
    justTell,
  };
};

export const changeChildPage = (
  name: String,
  value: Boolean
): AppDataAction => {
  return {
    type: "CHANGE_CHILD_PAGE",
    name,
    value,
  };
};

export const changeMessage = (message: string): AppDataAction => {
  return {
    type: "CHANGE_MESSAGE",
    message,
  };
};
