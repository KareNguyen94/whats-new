import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';

// NEWSCONTAINER COMPONENT CODE GOES HERE

const NewsContainer = ({news}) => {
  return (
    <div>{news.map(news => {
      return <NewsArticle news={news}></NewsArticle>
    })}
    </div>
  );
}

export default NewsContainer;