import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/articleDetails.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import news from '../news/news.js';
import { filter } from 'rxjs';


const ArticleDetails = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();

  // You'll need to fetch the actual article data based on the articleId.
  // Here's some dummy data for demonstration purposes.
  
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
