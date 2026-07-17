import axios from "axios";

export const generateAIImage = async (
  prompt,
  style,
  aspectRatio,
  model
) => {
  const enhancedPrompt = encodeURIComponent(`${style}, ${prompt}`);

  const imageUrl = `https://image.pollinations.ai/prompt/${enhancedPrompt}`;

  const response = await axios.get(imageUrl, {
    responseType: "arraybuffer",
  });

  return Buffer.from(response.data).toString("base64");
};