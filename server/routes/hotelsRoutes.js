import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
  countByCity,
  countByType,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/find/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/find/:id", verifyAdmin, deleteHotel);

//GET SINGLE HOTEL
router.get("/find/:id", getHotel);

//GET ALL HOTELS
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
