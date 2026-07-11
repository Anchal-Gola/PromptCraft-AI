import { useEffect, useState } from "react";
import { FaHistory, FaBars, FaTimes } from "react-icons/fa";
import { getHistory } from "../services/historyService";

function HistorySidebar({ setImage }) {
  const [isOpen, setIsOpen] = useState(true);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const data = await getHistory();
      setHistory(data.images);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 left-5 z-50 bg-zinc-900 p-3 rounded-lg border border-zinc-700"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside
        className={`fixed top-0 left-0 h-screen bg-zinc-900 border-r border-zinc-800 p-6 transition-all duration-300 overflow-y-auto ${
          isOpen ? "w-80" : "w-0 overflow-hidden p-0"
        }`}
      >
        <div className="flex items-center gap-3 mt-16 mb-8">
          <FaHistory className="text-blue-500 text-xl" />
          <h2 className="text-xl font-semibold">History</h2>
        </div>

        <div className="space-y-4">
          {history.length > 0 ? (
            history.map((item) => (
              <div
                key={item._id}
                onClick={() =>
                  setImage(`data:image/png;base64,${item.image}`)
                }
                className="bg-zinc-800 rounded-xl overflow-hidden cursor-pointer hover:bg-zinc-700 transition"
              >
                <img
                  src={`data:image/png;base64,${item.image}`}
                  alt={item.prompt}
                  className="w-full h-32 object-cover"
                />

                <div className="p-3">
                  <p className="text-sm font-medium line-clamp-2">
                    {item.prompt}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-zinc-500 text-center">
              No history found.
            </p>
          )}
        </div>
      </aside>
    </>
  );
}

export default HistorySidebar;