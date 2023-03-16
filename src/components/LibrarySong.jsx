import React, { useContext }  from 'react';
import AppContext from '../context/AppContext';

function LibrarySong ({ song }) {
  const { songs, setCurrentSong, setSongs, isDarkModeActive } = useContext(AppContext);
  const { id } = song;
    const songSelectHandler = () => {
      setCurrentSong({ ...song, active: true });
        //setCurrentSong(song);
        //add active state
        const newSongs = songs.map((song) => {
          if(song.id === id){
            return {
              ...song,
              active: true
            }
          }else{
            return{
              ...song,
              active: false
            }
          }
        });
        setSongs(newSongs);
    }
    return(
      <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''} ${isDarkModeActive ? 'library-song-dark' : ''} ${isDarkModeActive && song.active ? 'selected-dark' : ''} `}>
        <img alt={song.name} src={song.cover} />
        <div className="song-description">
            <h3 className={`${isDarkModeActive ? "dark-icon-font" : ""}`}>{song.name}</h3>
            <h4 className={`${isDarkModeActive ? "dark-icon-font" : ""}`}>{song.artist}</h4>
        </div>
      </div> 
        
    )
}

export default LibrarySong;