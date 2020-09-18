const Router = require("koa-router");
const AdminApi = new Router();
const bodyParser = require("koa-bodyparser");
const asyncBusboy = require("async-busboy");

const AppStatus = require("../middlewares/app-status");
const LoadAppSettings = require("../middlewares/load-app-settings");
const loadingSettingData = require("../middlewares/loading-setting-data");

/**
 * ROUTE FOR HANDLE APP STATUS================================================================
 */

AdminApi.get("/app-status", async (ctx) => {
  const { shop } = ctx.session;
  const _data = await AppStatus.GetAppStatus(shop);
  ctx.body = _data;
});

AdminApi.post("/app-status", bodyParser(), async (ctx) => {
  const { shop } = ctx.session;
  const bodyData = ctx.request.body;
  const _data = await AppStatus.UpdateAppStatus(shop, bodyData);
  ctx.body = _data;
});

/**
 * ============================================================================================
 */

/**
 * ROUTE FOR HANDLE CHECK STORE URL WITH IT'S SESSION==========================================
 */
AdminApi.post("/check-store", bodyParser(), async (ctx) => {
  const { shop } = ctx.session;
  const { parentUrl } = ctx.request.body;
  ctx.body = {
    status: "success",
    valid: shop == parentUrl,
  };
});
/**
 * ============================================================================================
 */

AdminApi.get("/load-app-settings", async (ctx) => {
  const { shop, accessToken } = ctx.session;
  const _data = await LoadAppSettings({ shop, accessToken });
  ctx.body = _data;
});
AdminApi.get("/getAllTheme", bodyParser(), async (ctx) => {
  const _data = await loadingSettingData();
  ctx.body = _data;
});

module.exports = AdminApi;
