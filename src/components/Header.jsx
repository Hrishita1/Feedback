// import React from 'react'
import PropTypes from 'prop-types'

function Header({bgColor, textColour}) {
  const headerStyles ={
    backgroundColor: bgColor,
    color: textColour,
  }
  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>Hello</h2>
        </div>
    </header>
  )
}

Header.defautProps ={
    text: 'feed',
    bgColor : 'rgba(0,0,0,0.4)',
}

Header.propTypes ={ 
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColour: PropTypes.string,
  
}


export default Header