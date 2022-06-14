import express from "express";

import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Authenticated");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Authenticated");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Admin authenticated");
// });
//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET SINGLE User
router.get("/:id", verifyUser, getUser);

//GET ALL UserS
router.get("/", verifyUser, getAllUsers);

export default router;
