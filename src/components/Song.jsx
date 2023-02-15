import React from 'react';

function Song ({ currentSong, isPlaying, isDarkModeActive }) {
    return(
      <div className="song-container">
        <img className={!isPlaying ? 'holding' : 'spinning'} alt={currentSong.name} src={currentSong.cover} />
        <h2 className={`${isDarkModeActive ? "dark-icon-font" : ""}`}>{currentSong.name}</h2>
        <h3 className={`${isDarkModeActive ? "dark-icon-font" : ""}`}>{currentSong.artist}</h3>
      </div>    
    )
}

export default Song;