import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology'
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      health,
      science,
      technology,
      currentPage: local
    }
  }

  switchPage = (page) => {
    this.setState({currentPage: this.state[page]});
  }
// everytime you setState Render runs
  searchArticles = (searchedArticle) => {
    console.log('heloooo')
    let filteredArticles = this.state.currentPage.filter(article => {
      if(article.headline.toLowerCase().includes(searchedArticle.toLowerCase()) || article.description.toLowerCase().includes(searchedArticle.toLowerCase())) {
        return article
      }
    })
    this.setState({currentPage: filteredArticles})
  }

  render () {
    return (
      <div className="app">
        <h1 className='header'>What's New
        <SearchForm searchArticles={this.searchArticles}></SearchForm>
        </h1>
        <div className='nav'> 
          <Menu className='nav' switchPage={this.switchPage}></Menu>
        </div>
        <NewsContainer className='main' news={this.state.currentPage}></NewsContainer>
      </div>
    );
  }
}

export default App;
