// AudioPlayer.jsx
import React, { useState, useEffect } from "react";
import PlayCircleFilledTwoToneIcon from "@mui/icons-material/PlayCircleFilledTwoTone";

const AudioPlayer = ({ podcastId, podcastTitle, episodeTitle, audioSource }) => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const savedProgress = localStorage.getItem(`progress-${podcastId}`);
    const savedIsPlaying = localStorage.getItem(`isPlaying-${podcastId}`);
    if (savedProgress && savedIsPlaying) {
      setProgress(Number(savedProgress));
      setIsPlaying(savedIsPlaying === "true");
    }

    const audio = new Audio(audioSource);
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      setProgress(audio.currentTime);
    });

    audio.addEventListener("ended", () => {
      setProgress(0);
      setIsPlaying(false);
    });

    setAudio(audio);
    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", () => {});
      audio.removeEventListener("ended", () => {});
    };
  }, [audioSource, podcastId]);

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
      localStorage.setItem(`progress-${podcastId}`, progress);
      localStorage.setItem(`isPlaying-${podcastId}`, isPlaying);
    }
  }, [audio, podcastId, isPlaying, progress]);

  const handlePlayPauseClick = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div className="audio-player">
      <span>{podcastTitle}</span>
      <span>{episodeTitle}</span>
      <div className="progress-bar">
        <span>{formatTime(progress)}</span>
        <input
          type="range"
          value={progress}
          max={duration}
          step="any"
          onChange={(e) => setProgress(e.target.value)}
        />
        <span>{formatTime(duration)}</span>
      </div>
      <button onClick={handlePlayPauseClick}>
        <PlayCircleFilledTwoToneIcon fontSize="large" />
      </button>
    </div>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = Math.floor(seconds % 60);
  return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
};

export default AudioPlayer;
