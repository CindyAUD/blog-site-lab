import React from 'react';

function Header({ name }) {
  return React.createElement(
    'header',
    { className: 'hero' },
    React.createElement('h1', null, name + "'s Blog"),
    React.createElement('p', null, 'Thoughts, projects, and my software engineering journey.')
  );
}

export default Header;