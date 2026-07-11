import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PromptBox from "./components/PromptBox";
import ImagePreview from "./components/ImagePreview";
import HistorySidebar from "./components/HistorySidebar";
import LoadingSkeleton from "./components/LoadingSkeleton";

function App() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <HistorySidebar setImage={setImage} />

      <div className="relative z-10 ml-80">
        <Navbar />

        <Hero />

        <PromptBox
          setImage={setImage}
          setLoading={setLoading}
        />

        {loading ? (
          <LoadingSkeleton />
        ) : (
          <ImagePreview image={image} />
        )}
      </div>
    </div>
  );
}

export default App;