const express = require("express");
const app = express();
const dotenv = require("dotenv");

//load env variables
dotenv.config({ path: "./config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
