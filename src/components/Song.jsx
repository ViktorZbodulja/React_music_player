import React, { useContext }  from 'react';
import AppContext from '../context/AppContext';

function Song () {
  const { currentSong, isPlaying, isDarkModeActive } = useContext(AppContext);
    return(
      <div className="song-container">
        <img className={!isPlaying ? 'holding' : 'spinning'} alt={currentSong.name} src={currentSong.cover} />
        <h2 className={`${isDarkModeActive ? "dark-icon-font" : ""}`} style={{color:currentSong.color[0]}}>{currentSong.name}</h2>
        <h3 className={`${isDarkModeActive ? "dark-icon-font" : ""}`}>{currentSong.artist}</h3>
      </div>    
    )
}

export default Song;