import Image from "../models/Image.js";
import { generateAIImage } from "../services/huggingFaceService.js";

export const generateImage = async (req, res) => {
  try {
    const { prompt, style, aspectRatio, model } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    // Generate image using Hugging Face
    const image = await generateAIImage(prompt);

    // Save image to MongoDB
    const newImage = await Image.create({
      prompt,
      image,
      style,
      aspectRatio,
      model,
    });

    res.json({
      success: true,
      image: newImage.image,
    });
  } catch (error) {
    console.log(
      error.response?.data
        ? error.response.data.toString()
        : error.message
    );

    res.status(500).json({
      success: false,
      message: "Image generation failed",
    });
  }
};