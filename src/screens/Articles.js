import React, { useEffect, useState } from 'react';
import '../styles/articles.css';
import Article from '../components/article.js';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import news from '../news/news.js'

import { useNavigate } from 'react-router-dom';
import GenreNavbar from '../components/genreNavbar';

const Articles = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     const fetchedArticles = await fetchTopHeadlines();
  //     setArticles(fetchedArticles);
  //   };
  //   fetchArticles();
  // }, []);

  // const articles = [
  //   {
  //     image: 'https://example.com/article1.jpg',
  //     title: 'Article Title 1',
  //     summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  //   },
  //   {
  //     image: 'https://example.com/article2.jpg',
  //     title: 'Article Title 2',
  //     summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  //   },
  //   {
  //     image: 'https://example.com/article3.jpg',
  //     title: 'Article Title 3',
  //     summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  //   },
  // ];

  const articles = news.articles;
  

  return (
    <div>
      <div className="header">
        <button className="goBackButton" onClick={goBack}>
         <ArrowBackIcon/>
        </button>
        <h1 className="title">Today's Discovery</h1>
      </div>
      <div className="articles">
        {articles.map((article, index) => (
          <Article
            articleNumber={index}
            key={index}
            image={article.urlToImage}
            title={article.title}
            summary={article.description}
          />
        ))}
      </div>
      
      <div className='articles-navbar'>
        <div className="articles-navbar-container">
              <GenreNavbar title='Browse by'/>
        </div>
      </div>
    </div>
  );
};

export default Articles;
