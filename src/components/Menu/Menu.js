import React from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE

const Menu = () => {

  return (
    <div>
      <button name='local'>Local</button>
      <button name='entertainment' >Entertainment</button>
      <button name='health' >Health</button>
      <button name='science' >Science</button>
      <button name='technology' >Technology</button>
    </div>
  );
}

export default Menu;