import React from 'react'

function LibrarySong ({ song, songs, setCurrentSong, id, setSongs, isDarkModeActive }) {
    const songSelectHandler = async () => {
        await setCurrentSong(song);
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
        await setSongs(newSongs);
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