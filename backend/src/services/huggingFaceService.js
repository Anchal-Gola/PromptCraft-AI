import axios from "axios";

export const generateAIImage = async (prompt) => {
  const response = await axios.post(
    "https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell",
    {
      inputs: prompt,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
        Accept: "image/png",
      },
      responseType: "arraybuffer",
    }
  );

  return Buffer.from(response.data).toString("base64");
};