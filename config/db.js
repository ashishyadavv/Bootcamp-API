const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://BOOTCAMPSECRET:W3R5sfNDaYUcGlgC@bootcamp.stnoi1h.mongodb.net/bootcamp-api",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Failed to connect to database: ${error.message}`);
  }
};

module.exports = connectDB;
