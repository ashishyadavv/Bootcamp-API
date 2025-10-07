const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const color = require("colors");
const errorHandler = require("./middlewares/error");
const connectDB = require("./config/db");
connectDB();

const bootcamps = require("./routes/bootCamp");

//load env variables
dotenv.config({ path: "./config/config.env" });
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/bootcamps", bootcamps);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`.yellow.bold);
});
