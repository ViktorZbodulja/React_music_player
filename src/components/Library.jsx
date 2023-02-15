import React from 'react'
import LibrarySong from './LibrarySong'

function Library({songs, setCurrentSong, setSongs, libraryStatus, isDarkModeActive}) {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""} ${isDarkModeActive ? "dark" : ""}`}>
        <h2 className={`${isDarkModeActive ? "dark-icon-font" : ""}`}>Library</h2>
        <div className='library-songs'>
          {songs.map(song => (
            <LibrarySong 
            songs={songs} 
            setCurrentSong={setCurrentSong} 
            song={song}
            key={song.id}
            id={song.id}
            setSongs={setSongs}
            isDarkModeActive={isDarkModeActive} /> 
          ))}
        </div>
    </div>
  )
}

export default Library;