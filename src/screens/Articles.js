import React, { useEffect, useState } from 'react';
import '../styles/articles.css';
import Article from '../components/article.js';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import news from '../news/news.js'

import { useNavigate } from 'react-router-dom';

const Articles = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/dashboard');
  };
  const articles = news.articles;
  

  return (
    <div>
      <div className="header">
        <button className="goBackButton" onClick={goBack}>
         <ArrowBackIcon/>
        </button>
        <h1 className="title">Latest News</h1>
      </div>
      <div className="articles">
        {articles.map((article, index) => (
          <Article
            articleNumber={index}
            key={index}
            image={article.urlToImage}
            title={article.title}
            description={article.description}
            summary={article.summary}
          />
        ))}
      </div>
      
      {/* <div className='articles-navbar'>
        <div className="articles-navbar-container">
              <GenreNavbar title='Browse by'/>
        </div>
      </div> */}
    </div>
  );
};

export default Articles;
