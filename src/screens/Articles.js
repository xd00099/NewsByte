import React from 'react';
import '../styles/articles.css';
import Article from '../components/article.js';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useNavigate } from 'react-router-dom';


const Articles = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

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
    // Add more articles as needed
  ];

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
            image={article.image}
            title={article.title}
            summary={article.summary}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
