import React from 'react'
import styleable from 'react-styleable'

import css from './ball.css'
import faces from './faces'

function getRootStyle(props) {
  const { left, top, ...rest } = props.style
  return { left, top }
}

function handleClick(props) {
  props.onClick(props.name)
}

function getFaceStyle(props) {
  const { left, top, ...rest } = props.style
  let styles = props.isActive ? { ...rest } : {}
  styles = {
    ...styles,
    backgroundImage: `url(${faces[props.name]})`
  }
  return styles
}

function getOverlayClassName(props) {
  return props.isActive ? props.css.overlayActive : props.css.overlay
}

function getBallClassName(props) {
  return props.isActive ? props.css.ballActive : props.css.ball
}

function getTopClassName(props) {
  return props.isActive ? props.css.topActive : props.css.top
}

function Ball(props) {
  return (
    <div style={getRootStyle(props)} className={props.css.root} onClick={handleClick.bind(null, props)}>
      <div className={getTopClassName(props)}></div>
      <div className={getBallClassName(props)} style={getFaceStyle(props)}></div>
      <div className={getOverlayClassName(props)}></div>
    </div>
  )
}

export default styleable(css)(Ball)
