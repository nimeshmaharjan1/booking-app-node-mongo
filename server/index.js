import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoutes.js";
import hotelsRoute from "./routes/hotelsRoutes.js";
import roomsRoute from "./routes/roomsRoutes.js";
import usersRoute from "./routes/usersRoutes.js";
import cookieParser from "cookie-parser";
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
const BASE_URI = "/api/v1";
//middlewares
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorMessage = err.message || "Something went wrong";
  const errorStatus = err.status || 500;
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(5000, () => {
  connect();
  console.log(`Server is running on PORT: 5000`);
});
