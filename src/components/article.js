import React, { useEffect, useState } from 'react';
import './styles/article.css';
import { Link } from 'react-router-dom';
import { getTextToSpeech } from '../services/textToSpeech.js';
import ClipLoader from "react-spinners/ClipLoader";

const Article = ({ articleNumber, image, title, description, summary }) => {
  const [audioUrl, setAudioUrl] = useState('');
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playButtonText, setPlayButtonText] = useState('▶');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isPlaying && audioUrl) {
      const newAudio = new Audio(audioUrl);
      newAudio.addEventListener('ended', () => {
        setIsPlaying(false);
        setPlayButtonText('▶');
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
      setPlayButtonText('▶');
      return;
    }

    if (!isPlaying) {
      setIsPlaying(true);
      setPlayButtonText('⏹');
    } else {
      setIsPlaying(false);
      setPlayButtonText('▶');
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
    <div className="article">
      <Link style={{ textDecoration: 'none' }} to={`/articles/${articleNumber}`}>
        <div className="image-container">
          <div
            className={`article-image-discovery ${audioUrl ? '' : 'dark-overlay'}`}
            style={{ backgroundImage: `url(${image})`, borderRadius: '10px' }}
          ></div>
          <div className="play-button" onClick={(e) => handlePlayButtonClick(e)}>
            {isLoading ? (
              <ClipLoader type="ThreeDots" color="#fff" height={15} width={15} />
            ) : (
              playButtonText
            )}
          </div>
        </div>
        <div style={{ padding: '0 10px 0 10px' }}>
          <h3 className="article-title">{title}</h3>
          <p className="article-summary">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Article;
