import { useState } from "react";
import { FaMagic, FaImage } from "react-icons/fa";
import toast from "react-hot-toast";
import { generateImage } from "../services/imageService";

function PromptBox({
  setImage,
  setPrompt,
  setLoading,
  setRefreshHistory,
  setProgress,
}) {
  const [prompt, setPromptInput] = useState("");
  const [style, setStyle] = useState("Realistic");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [model, setModel] = useState("FLUX Schnell");

  const handleGenerate = async () => {
  if (!prompt.trim()) {
    toast.error("Please enter a prompt.");
    return;
  }

  let value = 0;

  try {
    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 10) + 5;

      if (value >= 90) {
        value = 90;
        clearInterval(interval);
      }

      setProgress(value);
    }, 400);

    const data = await generateImage(
      prompt,
      style,
      aspectRatio,
      model
    );

    clearInterval(interval);

    setProgress(100);

    setImage(`data:image/png;base64,${data.image}`);
    setPrompt(prompt);

    setRefreshHistory((prev) => !prev);

    toast.success("Image generated successfully!");

    setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 500);

  } catch (error) {
    setLoading(false);
    setProgress(0);
    toast.error("Failed to generate image.");
  }
};

  return (
    <section className="max-w-5xl mx-auto mt-16 px-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-5">
          <FaImage className="text-blue-500 text-xl" />
          <h2 className="text-xl font-semibold">
            Enter Your Prompt
          </h2>
        </div>

        <textarea
          value={prompt}
          onChange={(e) => setPromptInput(e.target.value)}
          placeholder="A futuristic cyberpunk city at sunset with flying cars..."
          className="w-full h-40 bg-transparent outline-none resize-none text-white text-lg placeholder:text-zinc-500"
        />

        <div className="mt-6 flex flex-wrap gap-4">

          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="bg-zinc-800 px-4 py-3 rounded-lg outline-none"
          >
            <option>Realistic</option>
            <option>Anime</option>
            <option>3D</option>
            <option>Digital Art</option>
            <option>Fantasy</option>
          </select>

          <select
            value={aspectRatio}
            onChange={(e) => setAspectRatio(e.target.value)}
            className="bg-zinc-800 px-4 py-3 rounded-lg outline-none"
          >
            <option>1:1</option>
            <option>16:9</option>
            <option>9:16</option>
            <option>4:3</option>
          </select>

          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="bg-zinc-800 px-4 py-3 rounded-lg outline-none"
          >
            <option>FLUX Schnell</option>
          </select>

          <button
            onClick={handleGenerate}
            className="ml-auto flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <FaMagic />
            Generate Image
          </button>

        </div>

      </div>
    </section>
  );
}

export default PromptBox;