import React, { useEffect, useState } from 'react';
import { getTextToSpeech } from '../services/textToSpeech.js';
import ClipLoader from "react-spinners/ClipLoader";
import DownloadIcon from '@mui/icons-material/Download';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';

const SliderAudio = ({ summary }) => {
  const [audioUrl, setAudioUrl] = useState('');
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isPlaying && audioUrl) {
      const newAudio = new Audio(audioUrl);
      newAudio.addEventListener('ended', () => {
        setIsPlaying(false);
      });
      newAudio.play();
      setAudio(newAudio);
    }
  }, [audioUrl, isPlaying]);

  const handlePlayButtonClick = async (e) => {
    e.preventDefault();

    if (!audioUrl) {
      setIsLoading(true);
      await fetchAudioUrl(summary);
      setIsLoading(false);
      return;
    }

    if (!isPlaying) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      stopAudio();
    }
  };

  const fetchAudioUrl = async (text) => {
    const url = await getTextToSpeech(text);
    setAudioUrl(url);
  };

  const stopAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <div>
        <div className="play-button" onClick={(e) => handlePlayButtonClick(e)}>
        {isLoading ? (
            <ClipLoader type="ThreeDots" color="#fff" height={15} width={15} />
        ) : (!audioUrl ? (
            <DownloadIcon fontSize="large"/>
        ) : (isPlaying ? (
            <StopIcon fontSize="large" />
        ) : (
            <PlayArrowIcon fontSize="large"/>
        )))}
        </div>
    </div>
  );
};

export default SliderAudio;
