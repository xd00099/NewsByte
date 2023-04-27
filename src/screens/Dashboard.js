import React, { useEffect, useState } from 'react';
import '../styles/dashboard.css';
import Article from '../components/article.js';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import news from '../news/news.js'

import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
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

  const articles = [
    {
      image: 'https://example.com/article1.jpg',
      title: 'Article Title 1',
      summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    },
    {
      image: 'https://example.com/article2.jpg',
      title: 'Article Title 2',
      summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    },
    {
      image: 'https://example.com/article3.jpg',
      title: 'Article Title 3',
      summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    },
  ];

//   const articles = news.articles;
  

  return (
    <div>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Featured News</h1>
      </div>
      
      <div className="dashboard-content">
        <TextField size='small' />
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
    </div>
  );
};

export default Dashboard;
