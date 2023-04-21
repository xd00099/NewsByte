import React from 'react';
import '../styles/articles.css';
import { Link } from 'react-router-dom';

const Article = ({ articleNumber, image, title, summary }) => (
    
        <div className="article">
            <Link style={{textDecoration: 'none'}} to={`/articles/${articleNumber}`}>
                <div
                className="article-image"
                style={{ backgroundImage: `url(${image})`, borderRadius: '10px'}}
                ></div>
                <div style={{padding: '0 10px 0 10px'}}>
                <h3 className="article-title">{title}</h3>
                <p className="article-summary">{summary}</p>
                </div>
            </Link>
        </div>
    
);

export default Article;