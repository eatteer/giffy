import { createContext, useState } from "react";

export const CurrentGifContext = createContext()

export const CurrentGifContextProvider = ({ children }) => {
  const [currentGif, setCurrentGif] = useState(null)

  const context = {
    currentGif,
    setCurrentGif
  }

  return (
    <CurrentGifContext.Provider value={context}>
      {children}
    </CurrentGifContext.Provider>
  )
}