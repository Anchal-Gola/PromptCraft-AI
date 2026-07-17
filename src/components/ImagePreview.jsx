import { FaDownload, FaRedo } from "react-icons/fa";
import toast from "react-hot-toast";
import { generateImage } from "../services/imageService";

function ImagePreview({
  image,
  prompt,
  setImage,
  setLoading,
}) {
  const handleDownload = () => {
    if (!image) return;

    const link = document.createElement("a");
    link.href = image;
    link.download = "promptcraft-ai-image.png";
    link.click();
  };

  const handleRegenerate = async () => {
    if (!prompt) {
      toast.error("No prompt available.");
      return;
    }

    try {
      setLoading(true);

      const data = await generateImage(prompt);

      setImage(`data:image/png;base64,${data.image}`);

      toast.success("Image regenerated!");
    } catch (error) {
      toast.error("Failed to regenerate image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto mt-12 px-6 pb-20">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

        <div className="h-[450px] rounded-2xl border border-dashed border-zinc-700 flex items-center justify-center overflow-hidden">

          {image ? (
            <img
              src={image}
              alt="Generated AI"
              className="w-full h-full object-contain rounded-2xl"
            />
          ) : (
            <div className="text-center">
              <div className="text-7xl mb-5">🖼️</div>

              <h2 className="text-2xl font-semibold">
                Your AI Image
              </h2>

              <p className="text-zinc-500 mt-3">
                Generated image will appear here
              </p>
            </div>
          )}

        </div>

        <div className="flex justify-end gap-4 mt-6">

          <button
            onClick={handleRegenerate}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition"
          >
            <FaRedo />
            Regenerate
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
          >
            <FaDownload />
            Download
          </button>

        </div>

      </div>
    </section>
  );
}

export default ImagePreview;