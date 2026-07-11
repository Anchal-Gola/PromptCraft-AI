import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    prompt: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    style: {
      type: String,
      default: "Realistic",
    },

    aspectRatio: {
      type: String,
      default: "1:1",
    },

    model: {
      type: String,
      default: "FLUX Dev",
    },
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.model("Image", imageSchema);

export default Image;