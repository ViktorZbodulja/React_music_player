import React, { useContext }  from 'react';
import AppContext from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const { libraryStatus, setLibraryStatus, isDarkModeActive, setIsDarkModeActive } = useContext(AppContext);
  
  return (
    <nav>
        <h1 className={`${libraryStatus ? "hideTitle" : ""} ${isDarkModeActive ? "dark-icon-font" : ""}`}>Chill.Vibes</h1>
        <div className='button-container'>
          <button className={`${isDarkModeActive ? "dark-button" : ""}`} 
                  onClick={() => setLibraryStatus(!libraryStatus)}>
                    Library
              <FontAwesomeIcon icon={faMusic} />
          </button>
          <button className={`${isDarkModeActive ? "dark-button" : ""}`} 
                  onClick={() => setIsDarkModeActive(!isDarkModeActive)}>
                    Dark mode
            <FontAwesomeIcon icon={isDarkModeActive ? faMoon : faSun} />
          </button>
        </div>
    </nav>
  )
}

export default Nav