import { useState } from "react";
import { FaHistory, FaBars, FaTimes, FaTrash } from "react-icons/fa";
import { deleteHistoryImage } from "../services/historyService";
function HistorySidebar({
  setImage,
  history,
  setHistory,
  refreshHistory,
}) {
  const [isOpen, setIsOpen] = useState(true);




  const handleDelete = async (id) => {
    try {
      await deleteHistoryImage(id);

      setHistory((prevHistory) =>
        prevHistory.filter((item) => item._id !== id)
      );
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
        className={`fixed top-0 left-0 h-screen bg-zinc-900 border-r border-zinc-800 p-6 transition-all duration-300 overflow-y-auto ${isOpen ? "w-80" : "w-0 overflow-hidden p-0"
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
                className="bg-zinc-800 rounded-xl overflow-hidden"
              >
                <img
                  src={`data:image/png;base64,${item.image}`}
                  alt={item.prompt}
                  onClick={() =>
                    setImage(`data:image/png;base64,${item.image}`)
                  }
                  className="w-full h-32 object-cover cursor-pointer"
                />
                <div className="p-3">
                  <p className="text-sm font-medium line-clamp-2">
                    {item.prompt}
                  </p>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="mt-3 flex items-center gap-2 bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-sm transition"
                  >
                    <FaTrash />
                    Delete
                  </button>
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