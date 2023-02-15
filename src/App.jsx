import React, {useState} from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import "./styles/app.css";
import data from "./data";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""} ${isDarkModeActive ? "dark" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} isDarkModeActive={isDarkModeActive} setIsDarkModeActive={setIsDarkModeActive} />
      <Song currentSong={currentSong} isPlaying={isPlaying} isDarkModeActive={isDarkModeActive} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} songs={songs} setCurrentSong={setCurrentSong} setSongs={setSongs} isDarkModeActive={isDarkModeActive} />
      <Library songs={songs} setCurrentSong={setCurrentSong} setSongs={setSongs} libraryStatus={libraryStatus} isDarkModeActive={isDarkModeActive} />
    </div>
  );
}

export default App;
