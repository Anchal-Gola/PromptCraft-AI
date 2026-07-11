import axios from "axios";

const API = "http://localhost:5000/api";

export const generateImage = async (
  prompt,
  style,
  aspectRatio,
  model
) => {
  const response = await axios.post(`${API}/generate`, {
    prompt,
    style,
    aspectRatio,
    model,
  });

  return response.data;
};