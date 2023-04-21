import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/articleDetails.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ArticleDetails = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();

  // You'll need to fetch the actual article data based on the articleId.
  // Here's some dummy data for demonstration purposes.
  const article = {
    image: 'https://example.com/article1.jpg',
    title: 'Article Title: This is the most exciting news of today',
    content: 'Full article content goes here...'
  };

  const goBack = () => {
    navigate(-1);
  };

  console.log(articleId);

  return (
    <div>
      <div className="article-details-header">
        <button className="goBackButton" onClick={goBack}>
            <ArrowBackIcon/>
        </button>
      </div>
      <div className="article-details">
        <p className="article-details-title">{article.title}</p>
        <div className="article-content">{article.content}</div>
      </div>
    </div>
  );
};

export default ArticleDetails;
