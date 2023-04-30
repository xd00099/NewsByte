import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/articleDetails.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import news from '../news/news.js';
import { getTextToSpeech } from '../services/textToSpeech.js';
import LaunchIcon from '@mui/icons-material/Launch';


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
  let dateStr = article.publishedAt;
  let dateObj = new Date(dateStr);
  let options = { day: 'numeric', month: 'short', year: 'numeric' };
  let datePart = new Intl.DateTimeFormat('en-GB', options).format(dateObj);
  let timePart = dateObj.toLocaleTimeString('en-GB', { hour: '2-digit', minute:'2-digit' });
  let formattedDateStr = `${datePart} · ${timePart}`;

  return (
    <div className='articleDetails-page'>
      <div className="article-details-header" style={{backgroundImage: `url(${article.urlToImage})`}}>
        <button className="circle-button">
          <LaunchIcon onClick={() => (window.open(article.url))}/>
        </button>
        <button className="goBackButton-details" onClick={goBack}>
            <ArrowBackIcon/>
        </button>
      </div>
      <div className="article-details">
        <p style={{color: '#9c2661', fontFamily: 'Sans-serif', textTransform: 'uppercase', fontSize: '12px', margin: '0'}}>{article.category}</p>
        <p className="article-details-title">{article.title}</p>
        
        <div className='time-profile'> 
            <p style={{color: '#70758a', fontFamily: 'Sans-serif', textTransform: 'uppercase', fontSize: '10px', margin: '0'}}>{formattedDateStr}</p>
            <p>BY</p>
            <h3>{article.author}</h3>
            
        </div>
        <div className="article-content">{article.summary}</div>
      </div>
    </div>
  );
};

export default ArticleDetails;
