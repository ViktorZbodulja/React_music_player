import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  return (
    <AppContext.Provider
      value={{
        songs,
        setSongs,
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
        libraryStatus,
        setLibraryStatus,
        isDarkModeActive,
        setIsDarkModeActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
