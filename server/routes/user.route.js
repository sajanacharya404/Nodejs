import express from "express";
import {
  deleteUserById,
  getUserById,
  getUsers,
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getUsers);
router.get("/user/:id", getUserById);
router.delete("/user/:id", deleteUserById);
router.patch("/update/:id", updateUser);

export default router;
