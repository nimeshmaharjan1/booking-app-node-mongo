import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
  countByCity,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET SINGLE HOTEL
router.get("/:id", getHotel);

//GET ALL HOTELS
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getAllHotels);

export default router;
