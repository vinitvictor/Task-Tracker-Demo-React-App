import React from 'react'
import PropTypes from 'prop-types'

function Button({color,text,onClick}) {
  return (
    <button className='btn' style = {{backgroundColor: color}} onClick={onClick} >{text}</button>
  )
}

Button.defaultProps = {
    color : 'steelblue',
    text : 'Default Button'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button