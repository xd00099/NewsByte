import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import news from '../news/news.js'
import Link from '@mui/material/Link';
import FeedIcon from '@mui/icons-material/Feed';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import MenuBar from '../components/menubar.js';
import "swiper/css";
import "swiper/css/effect-cards";

import '../styles/dashboard.css';
import ArticleDash from '../components/articleDash.js';
import GenreNavbar from '../components/genreNavbar.js';


const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("All");
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
        <FeedIcon style={{color: '#eceff3'}}/>
        <h1 className="dashboard-title">NewsByte</h1>
      </div>
      
      <div className="dashboard-content">
        {/* <div className='search-bar'>
            <div className="search-input-container">
                <TextField size="small" className="search-input" />
                <SearchIcon   className="search-icon" />
            </div>
        </div> */}

        <MenuBar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

        <Swiper
          style={{paddingTop: '10px'}}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper">

          {topArticles.map((article, index) => (
            <div className='swipecard'>
              <SwiperSlide key={index} style={{backgroundImage: `url(${article.urlToImage})`, boxShadow: '5px 5px 8px #00000087'}}>
                <div className="overlay"></div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>

        <div className='show-more' style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', paddingTop: '60px', paddingBottom: '20px'}}>
          <h1 className="dashboard-subtitle">Latest News</h1>
          <Link href="/articles" style={{color: '#eceff3', fontFamily: 'Abril Fatface', color: '#70758a', fontSize: '14px' ,textAlign: 'center'}} underline="none">
                {'See More'}
            </Link>
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

        {/* <div className="shuffle-button" onClick={handleShuffleClick}>
          Shuffle
        </div> */}
      </div>
    </div>
    
  );
};

export default Dashboard;
