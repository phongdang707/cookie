const { Pool } = require("pg");
require("dotenv").config();
const {
  POSTGRES_USER,
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_PWD,
  POSTGRES_PORT,
} = process.env;
const conObj = {
  user: POSTGRES_USER,
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  password: POSTGRES_PWD,
  port: POSTGRES_PORT,
};
const pool = new Pool(conObj);

module.exports = function LoadingSettingData() {
  return (async () => {
    const client = await pool.connect();
    try {
      const result = await client.query(
        `SELECT * FROM store_settings WHERE store_name='1234'`
      );

      console.log("result", result.Result);
      console.log("result", result.rows[0].widget);
      let data = result.rows[0].widget;

      return {
        status: "success",
        msg: "connect to db successfully",
        data,
      };

      //   console.log("result", result.Result.rows[0]);

      //   console.log("result", result.Result.rows[0].widget);
    } catch (error) {
      console.log("error", error);
    }
  })().catch((err) => {
    console.log(err.message);
  });
};
