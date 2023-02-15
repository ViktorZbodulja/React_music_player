import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Nav({ libraryStatus, setLibraryStatus, isDarkModeActive, setIsDarkModeActive }) {
  return (
    <nav>
        <h1 className={`${isDarkModeActive ? "dark-icon-font" : ""}`}>Chill.Hop</h1>
        <div>
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