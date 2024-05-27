import express from "express";
import { createBook } from "../controllers/book.controller.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/book", verifyToken, createBook);

export default router;
