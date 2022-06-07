import express from "express";
import { getRoom } from "../controllers/roomController.js";
import {
  updateRoom,
  createRoom,
  deleteRoom,
  getAllRooms,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
router.post("/:hotelId", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

//GET SINGLE Room
router.get("/:id", getRoom);

//GET ALL RoomS
router.get("/", getAllRooms);
export default router;
