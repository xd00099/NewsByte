import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/articleDetails.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import news from '../news/news.js';
import { getTextToSpeech } from '../services/textToSpeech.js';


const ArticleDetails = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [audioUrl, setAudioUrl] = useState('');
  

  const playAudio = async (text) => {
    if (!audioUrl) {
      const url = await fetchAudioUrl(text);
      setAudioUrl(url);
    }
  
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };

  const fetchAudioUrl = async (text) => {
    console.log(text);
    const url = await getTextToSpeech(text);
    return url;
  };
  
  const articles = news.articles;
  const article = articles.filter((a) => a.id == articleId)[0]
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="article-details-header" style={{backgroundImage: `url(${article.urlToImage})`}}>
        <button className="goBackButton-details" onClick={goBack}>
            <ArrowBackIcon/>
        </button>
      </div>
      <div className="article-details">
        <p className="article-details-title">{article.title}</p>
        <div className="article-content">{article.summary}</div>
      </div>
    </div>
  );
};

export default ArticleDetails;
