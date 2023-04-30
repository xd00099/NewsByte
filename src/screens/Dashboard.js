import React, { useEffect, useState } from 'react';
import news from '../news/news.js'
import Link from '@mui/material/Link';
import FeedIcon from '@mui/icons-material/Feed';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import MenuBar from '../components/menubar.js';
import ArticleDash from '../components/articleDash.js';
import { getTextToSpeech } from '../services/textToSpeech.js';
import Article from '../components/article.js';
import SliderAudio from '../components/sliderAudio.js';

import "swiper/css";
import "swiper/css/effect-cards";
import '../styles/dashboard.css';


const Dashboard = () => {
  const articles = news.articles;
  const [selectedItem, setSelectedItem] = useState("All");
  const [topArticles, setTopArticles] = useState(getFirstThree(articles,3));
  const [cateArticles, setCateArticles] = useState(getCategoryArticles(articles, selectedItem, 3));

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
    let categoryArticles = articles
    if (selectedItem != 'All')
      categoryArticles = articles.filter((a) => a.category == selectedItem)
    setCateArticles(getRandomElements(categoryArticles, 3));
  };
  
  function getCategoryArticles(arr, category, count) {
    if (category != 'All')
      arr = arr.filter((a) => a.category == category)
    return arr
      .sort()
      .slice(0, count);
  }

  const handleChangeCategory = (category) => {
    setSelectedItem(category);
    setCateArticles(getCategoryArticles(articles, selectedItem, 3));
  }

  useEffect(() => {
    setCateArticles(getCategoryArticles(articles, selectedItem, 3));
  }, [selectedItem]);

  return (
    <div className='dashboard-container'>
      <div className="dashboard-header">
        <FeedIcon style={{color: '#eceff3'}}/>
        <h1 className="dashboard-title">NewsByte</h1>
        <AutorenewIcon onClick={handleShuffleClick} style={{color: '#eceff3'}} />
      </div>
      
      <div className="dashboard-content">
        {/* <div className='search-bar'>
            <div className="search-input-container">
                <TextField size="small" className="search-input" />
                <SearchIcon   className="search-icon" />
            </div>
        </div> */}

        <MenuBar onClick={handleChangeCategory} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

        <Swiper
          style={{paddingTop: '10px'}}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          >

          {cateArticles.map((article, index) => (
            <div className='swipecard'>
              <SwiperSlide key={index} style={{backgroundImage: `url(${article.urlToImage})`, boxShadow: '5px 5px 8px #00000087'}}>
                <div className="overlay">
                  <SliderAudio summary={article.summary}></SliderAudio>
                  <div className='swipecard-text'>
                  <p style={{color: '#9c2661', fontFamily: 'Sans-serif', textTransform: 'uppercase', fontSize: '12px', margin: '0'}}>{article.category}</p>
                  <h2 style={{color: '#eceff3', fontFamily: 'Abril Fatface', fontSize: '18px'}}>{article.title}</h2>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>

        <div className='show-more' style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', paddingTop: '60px', paddingBottom: '20px'}}>
          <h1 className="dashboard-subtitle">Latest News</h1>
          <Link href="/articles" style={{color: '#eceff3', fontFamily: 'Abril Fatface', color: '#70758a', fontSize: '14px' ,textAlign: 'center'}} underline="none">
                {'See All'}
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
