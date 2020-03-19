import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE

const NewsArticle = ({id, headline, img, description, url}) => {
  return <div className='news-article-div'>
    <h2>{headline}</h2>
    <img className='article-image' src={img} />
    <p>{description}</p>
    <a href={url}>Link to article -></a>
  </div>
}

export default NewsArticle;