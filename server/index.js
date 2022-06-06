import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongo database");
  } catch (error) {
    throw error;
  }
};

// mongoose.connection.on("connected", () => {
//   console.log("mongoDB connected");
// });
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

app.use("/auth", authRoute);

app.listen(5000, () => {
  connect();
  console.log(`Server is running on PORT: 5000`);
});
