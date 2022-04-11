import React from 'react';
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom';


function Header({text, bgColor, textColor}) {

  const headerStyles = {
            backgroundColor: bgColor,
            color: textColor
        }

  return (
    <header style={headerStyles}>
      <div className="container">
      <h2>{text}</h2>
      </div>
    </header>
  )
}

export default Header


Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#3fe43f'
};

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}
// export default Header;
