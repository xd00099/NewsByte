import React from 'react';
import './styles/articleDash.css';
import { Link } from 'react-router-dom';

const ArticleDash = ({ articleNumber, image, title, summary }) => (
    
        <div className="articleDash">
            <Link style={{textDecoration: 'none'}} to={`/articles/${articleNumber}`}>

                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <div className="article-image-Dash" style={{borderRadius: '10px'}}>
                            <div className="image-wrapper" style={{backgroundImage: `url(${image})`}}></div>
                        </div>
                    </div>

                    <div style={{width: '65vw', padding: '0 0 0 10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                        <h3 className="dash-article-title">{title}</h3>
                        <p className="dash-article-summary">{summary}</p>
                    </div>
                </div>

            </Link>
        </div>
    
);

export default ArticleDash;