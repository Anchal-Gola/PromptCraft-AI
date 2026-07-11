import { useState } from "react";
import { FaHistory, FaBars, FaTimes } from "react-icons/fa";

function HistorySidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 left-5 z-50 bg-zinc-900 p-3 rounded-lg border border-zinc-700"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside
        className={`fixed top-0 left-0 h-screen bg-zinc-900 border-r border-zinc-800 p-6 transition-all duration-300 ${
          isOpen ? "w-80" : "w-0 overflow-hidden p-0"
        }`}
      >
        <div className="flex items-center gap-3 mt-16 mb-8">
          <FaHistory className="text-blue-500 text-xl" />
          <h2 className="text-xl font-semibold">History</h2>
        </div>

        <div className="space-y-4">

  {[1, 2, 3].map((item) => (
    <div
      key={item}
      className="bg-zinc-800 rounded-xl overflow-hidden cursor-pointer hover:bg-zinc-700 transition"
    >
      <img
        src={`https://picsum.photos/300/200?random=${item}`}
        alt="history"
        className="w-full h-32 object-cover"
      />

      <div className="p-3">
        <p className="text-sm font-medium">
          AI Generated Image {item}
        </p>
      </div>
    </div>
  ))}

</div>
      </aside>
    </>
  );
}

export default HistorySidebar;