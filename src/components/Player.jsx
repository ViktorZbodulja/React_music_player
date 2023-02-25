import React, {useRef, useState, useEffect, useContext} from "react";
import AppContext from '../context/AppContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause, faVolumeDown } from "@fortawesome/free-solid-svg-icons";

function Player () {
  const { isPlaying, setIsPlaying, currentSong, songs, setCurrentSong, setSongs, isDarkModeActive } = useContext(AppContext);
  
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
    volume: 0.5
  });
  const [activeVolume, setActiveVolume] = useState(false);

  const timeUpadateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo, 
      currentTime: current, 
      duration, 
      animationPercentage,
       })
  }
  /*const songEndHandler = () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
       setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  }*/
  // when current song comes to the end, auto play next song
  const songEndHandler = () => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  const newIndex = (currentIndex + 1) % songs.length;
  setCurrentSong(songs[newIndex]);
  activeLibraryHandler(songs[newIndex]);
  };

//UseEffect Update List
 const activeLibraryHandler = (nextPrev) => {
  const newSongs = songs.map((song) => {
    if(song.id === nextPrev.id){
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
 };

 const playSongHandler = () => {
  setIsPlaying(!isPlaying);
  isPlaying ? audioRef.current.play() : audioRef.current.pause();
};

 /* const playSongHandler = () => {
    if(!isPlaying){
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }else{
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  }*/
  useEffect(() => {
    var playPromise = audioRef.current[isPlaying ? 'play' : 'pause']();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {});
    }
  }, [isPlaying, currentSong]);

  const formatTime = (time) => {
    return(
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    ); 
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime: e.target.value})
  }; 
  
  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  
    //Forward Back
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };
  
  //Add the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`
  }

  const changeVolume = (e) => {
    let value = e.target.value;
    audioRef.current.volume = value;
    setSongInfo({ ...songInfo, volume: value });
  };
    return(
      <div className="player">
        <div className="time-control">
            <p>{formatTime(songInfo.currentTime)}</p>
            <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
              <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} type="range" />
              <div style={trackAnim} className="animate-track"></div>
            </div>
            <p>{songInfo.duration ? formatTime(songInfo.duration) : "0:00"}</p>
        </div>
        <div className="play-control">
          <FontAwesomeIcon 
            onClick={() => skipTrackHandler('skip-back')} 
            className={`skip-back ${isDarkModeActive ? "icon-dark" : ""}`} 
            size="2x" icon={faAngleLeft} />
          <FontAwesomeIcon 
            onClick={playSongHandler} 
            className={`play ${isDarkModeActive ? "icon-dark" : ""}`}
            size="2x" 
            icon={isPlaying ? faPause : faPlay} />
          <div className="volume-container">
            <FontAwesomeIcon 
              onClick={() => skipTrackHandler('skip-forward')}
              className={`skip-forward ${isDarkModeActive ? "icon-dark" : ""}`} 
              size="2x" 
              icon={faAngleRight} />
            <FontAwesomeIcon
              className={`volume-button ${isDarkModeActive ? "icon-dark" : ""}`} 
              onClick={() => setActiveVolume(!activeVolume)}
              icon={faVolumeDown} />  
            {activeVolume && (
              <input className="volume-range" onChange={changeVolume} value={songInfo.volume} type="range" max="1" min="0" step="0.01" />
            )}
          </div>
        </div>
        <audio onEnded={songEndHandler} onLoadedMetadata={timeUpadateHandler} onTimeUpdate={timeUpadateHandler} ref={audioRef} src={currentSong.audio}></audio>
      </div> 
        
    )
}

export default Player;