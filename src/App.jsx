import React, {useState} from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import "./styles/app.css";
import data from "./data";
import { AppProvider } from "./context/AppContext";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  
  return (
    <AppProvider value={{
          songs, 
          setSongs, 
          currentSong, 
          setCurrentSong, 
          isPlaying, 
          setIsPlaying, 
          libraryStatus, 
          setLibraryStatus, 
          isDarkModeActive, 
          setIsDarkModeActive
        }}
      >
      <div className={`App ${libraryStatus ? "library-active" : ""} ${isDarkModeActive ? "dark" : ""}`}>
        <Nav />
        <Song />
        <Player />
        <Library />
      </div>
    </AppProvider>
  );
}

export default App;
