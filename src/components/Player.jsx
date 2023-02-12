import React, {useRef, useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";

function Player ({ currentSong, isPlaying, setIsPlaying, songs, setCurrentSong, setSongs }) {
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
  });
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
      animationPercentage })
  }
  const songEndHandler = () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
       setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  }

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
    if(!isPlaying){
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }else{
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  }
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

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if(direction === "skip-forward"){
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if(direction === "skip-back"){
      if((currentIndex -1) < 0){
        setCurrentSong(songs[songs.length -1]);
        activeLibraryHandler(songs[songs.length -1]);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
  }
  //Add the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`
  }
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
            <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft} />
            <FontAwesomeIcon 
              onClick={playSongHandler} 
              className="play" 
              size="2x" 
              icon={isPlaying ? faPause : faPlay} />
            <FontAwesomeIcon  onClick={() => skipTrackHandler('skip-forward')}className="skip-forward" size="2x" icon={faAngleRight} />
        </div>
        <audio onEnded={songEndHandler}  onLoadedMetadata={timeUpadateHandler} onTimeUpdate={timeUpadateHandler} ref={audioRef} src={currentSong.audio}></audio>
      </div> 
        
    )
}

export default Player;