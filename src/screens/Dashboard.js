import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import news from '../news/news.js'
import Link from '@mui/material/Link';
import FeedIcon from '@mui/icons-material/Feed';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from 'swiper';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import MenuBar from '../components/menubar.js';
import ArticleDash from '../components/articleDash.js';
import SliderAudio from '../components/sliderAudio.js';

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import '../styles/dashboard.css';


const Dashboard = () => {
  const articles = news.articles;
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("All");
  const [cateArticles, setCateArticles] = useState(getCategoryArticles(articles, selectedItem, 5));
  const [topArticles, setTopArticles] = useState(getCategoryArticles(articles, selectedItem, 3));

  function truncateBegin(summary, wordCount) {
    let add = "";
    if (summary.length > wordCount) add = "...";
    return summary.split(" ").slice(0, wordCount).join(" ") + add;
  }
  
  function getRandomElements(arr, count) {
    let randArticels = [...arr];
    return randArticels
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
  }

  // function getFirstThree(arr, count) {
  //   return arr
  //     .sort()
  //     .slice(0, count);
  // }

  const handleShuffleClick = () => {
    let categoryArticles = articles
    if (selectedItem !== 'All')
      categoryArticles = articles.filter((a) => a.category === selectedItem)
    setCateArticles(getRandomElements(categoryArticles, 5));
    setTopArticles(getRandomElements(cateArticles, 3));
  };
  
  function getCategoryArticles(arr, category, count) {
    if (category !== 'All')
      arr = arr.filter((a) => a.category === category)
    return getRandomElements(arr, count);
  }

  const handleChangeCategory = (category) => {
    setSelectedItem(category);
    setCateArticles(getCategoryArticles(articles, selectedItem, 5));
  }

  useEffect(() => {
    setCateArticles(getCategoryArticles(articles, selectedItem, 5));
  }, [selectedItem]);

  useEffect(() => {
    setTopArticles(getCategoryArticles(articles, selectedItem, 3));
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
        
        <div style={{paddingBottom: '20px', overflow: 'hidden' }}>
        <Swiper
          style={{paddingTop: '10px'}}
          effect={"cards"}
          autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          }}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper"
          >

          {cateArticles.map((article, index) => (
            <div className='swipecard'>
              <SwiperSlide key={index} style={{backgroundImage: `url(${article.urlToImage})`, boxShadow: '5px 5px 8px #00000087'}}>
                <div className="overlay">
                  <SliderAudio summary={article.summary}></SliderAudio>
                  <div className='swipecard-text' onClick={()=>(navigate(`/articles/${article.id}`))}>
                  <p style={{color: '#9c2661', fontFamily: 'Sans-serif', textTransform: 'uppercase', fontSize: '12px', margin: '0'}}>{article.category}</p>
                  <h2 style={{color: '#eceff3', fontFamily: 'Abril Fatface', fontSize: '17px', marginTop: '5px'}}>{article.title}</h2>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
        </div>

        <div className='show-more' style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', paddingTop: '30px', paddingBottom: '20px'}}>
          <h1 className="dashboard-subtitle">Latest News</h1>
          <Link href="/articles" style={{fontFamily: 'Abril Fatface', color: '#70758a', fontSize: '14px' ,textAlign: 'center'}} underline="none">
                {'See All'}
            </Link>
        </div>

        {topArticles.map((article, index) => (
          <ArticleDash
            articleNumber={article.id}
            key={article.id}
            image={article.urlToImage}
            title={article.title}
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
