import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE

const NewsArticle = (props) => {
  return <div className='news-article-div'>
    <h2>{props.news.headline}</h2>
    <img className='article-image' src={props.news.img} />
    <p>{props.news.description}</p>
    <a href={props.news.url}>Link to article -></a>
  </div>
}

export default NewsArticle;