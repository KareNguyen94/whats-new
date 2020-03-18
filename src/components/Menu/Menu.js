import React from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE

const Menu = (props) => {

  const getPageName = (event) => {
    props.switchPage(event.target.name)
  }

  return (
    <div>
      <button name='local' onClick={getPageName}>Local</button>
      <button name='entertainment' onClick={getPageName}>Entertainment</button>
      <button name='health' onClick={getPageName}>Health</button>
      <button name='science' onClick={getPageName}>Science</button>
      <button name='technology' onClick={getPageName}>Technology</button>
    </div>
  );
}

export default Menu;