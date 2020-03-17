import React, { Component } from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';

// NEWSCONTAINER COMPONENT CODE GOES HERE

class NewsContainer extends Component {
  render() {
    return <div>{this.props.localNews.map(news => {
      return <NewsArticle news={news}></NewsArticle>
    })}
    </div>
  }
}

export default NewsContainer;