import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';

// NEWSCONTAINER COMPONENT CODE GOES HERE

const NewsContainer = ({news}) => {
  return (
    <div>{news.map(news => {
      return <NewsArticle 
        key={news.id}
        headline={news.headline}
        img={news.img}
        description={news.description}
        url={news.url}
        >
        </NewsArticle>
    })}
    </div>
  );
}

export default NewsContainer;