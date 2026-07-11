import { createContext, useState } from "react";

export const ImageContext = createContext();

export function ImageProvider({ children }) {
  const [image, setImage] = useState("");
  const [history, setHistory] = useState([]);

  const addToHistory = (newImage) => {
    setHistory((prev) => [newImage, ...prev]);
  };

  return (
    <ImageContext.Provider
      value={{
        image,
        setImage,
        history,
        addToHistory,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}