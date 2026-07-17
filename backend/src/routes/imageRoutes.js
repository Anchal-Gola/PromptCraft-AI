import express from "express";
import {
  generateImage,
  deleteImage,
} from "../controllers/imageController.js";

const router = express.Router();

router.post("/generate", generateImage);

router.delete("/delete/:id", deleteImage);

export default router;