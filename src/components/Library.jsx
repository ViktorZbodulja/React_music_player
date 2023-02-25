import React, { useContext }  from 'react';
import AppContext from '../context/AppContext';
import LibrarySong from './LibrarySong'

function Library() {
  const { songs, libraryStatus, isDarkModeActive } = useContext(AppContext);
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""} ${isDarkModeActive ? "dark" : ""}`}>
        <h2 className={`${isDarkModeActive ? "dark-icon-font" : ""}`}>Library</h2>
        <div className='library-songs'>
          {songs.map(song => (
            <LibrarySong 
              key={song.id}
              song={song}
             /> 
          ))}
        </div>
    </div>
  )
}

export default Library;