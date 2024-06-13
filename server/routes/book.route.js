import express from "express";
import { createBook, getAllBook } from "../controllers/book.controller.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/book", verifyToken, createBook);
router.get("/allbooks", getAllBook);

export default router;
