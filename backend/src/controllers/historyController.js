import Image from "../models/Image.js";

export const getHistory = async (req, res) => {
  try {
  const images = await Image.find().limit(20);
    res.status(200).json({
      success: true,
      images,
    });
  } catch (error) {
  console.log(error);

  res.status(500).json({
    success: false,
    message: "Failed to fetch history",
  });
}
};