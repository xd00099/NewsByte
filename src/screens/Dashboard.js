import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import news from '../news/news.js'
import Link from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


import '../styles/dashboard.css';
import ArticleDash from '../components/articleDash.js';
import GenreNavbar from '../components/genreNavbar.js';

const Dashboard = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     const fetchedArticles = await fetchTopHeadlines();
  //     setArticles(fetchedArticles);
  //   };
  //   fetchArticles();
  // }, []);

//   const articles = [
//     {
//       image: 'https://example.com/article1.jpg',
//       title: 'Article Title 1',
//       summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
//     },
//     {
//       image: 'https://example.com/article2.jpg',
//       title: 'Article Title 2',
//       summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
//     },
//     {
//       image: 'https://example.com/article3.jpg',
//       title: 'Article Title 3',
//       summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
//     },
//   ];
  function truncateBegin(summary, wordCount) {
    let add = "";
    if (summary.length > wordCount) add = "...";
    return summary.split(" ").slice(0, wordCount).join(" ") + add;
  }
  
  function getRandomElements(arr, count) {
    return arr
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
  }

  function getFirstThree(arr, count) {
    return arr
      .sort()
      .slice(0, count);
  }

  const handleShuffleClick = () => {
    setTopArticles(getRandomElements(articles, 3));
  };


  const articles = news.articles;

  const [topArticles, setTopArticles] = useState(getFirstThree(articles,3));

  return (
    <div className='dashboard-container'>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Featured News</h1>
      </div>
      
      <div className="dashboard-content">
        <div className='search-bar'>
            <div className="search-input-container">
                <TextField size="small" className="search-input" />
                <SearchIcon className="search-icon" />
            </div>
        </div>
        {topArticles.map((article, index) => (
          <ArticleDash
            articleNumber={article.id}
            key={article.id}
            image={article.urlToImage}
            title={truncateBegin(article.title,7)}
            summary={truncateBegin(article.description,10)}
          />
        ))}
        
        <div className='show-more' style={{display: 'flex', justifyContent: 'center'}}>
            <Link href="/articles" style={{color: '#6766CC', fontFamily: 'Inter', textAlign: 'center'}} underline="none">
                {'Show More'}
            </Link>
        </div>

        <div className='genre-nav-container'>
          <GenreNavbar title='Genre'/>
        </div>

        <div className="shuffle-button" onClick={handleShuffleClick}>
          Shuffle
        </div>
      </div>
    </div>
    
  );
};

export default Dashboard;
