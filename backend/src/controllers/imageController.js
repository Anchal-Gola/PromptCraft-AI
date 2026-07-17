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
    const image = await generateAIImage(
  prompt,
  style,
  aspectRatio,
  model
    );
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
    console.error("========== FULL ERROR ==========");
console.error(error);

if (error.cause) {
  console.error("CAUSE:", error.cause);
}

if (error.response) {
  console.error("RESPONSE:", error.response.data);
}
console.error("================================");
    res.status(500).json({
      success: false,
      message: "Image generation failed",
    });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;

    await Image.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete image",
    });
  }
};