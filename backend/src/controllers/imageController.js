import { generateAIImage } from "../services/huggingFaceService.js";

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const image = await generateAIImage(prompt);

    res.json({
      success: true,
      image,
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
}