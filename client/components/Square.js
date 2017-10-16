import React from 'react'

export default function Square ({colour, saveColour, size}) {
  const height = `${80 / size}vh`
  var style = {
    height,
    width: height,
    background: colour.colour,
    cursor: 'pointer'
  };
  return <div className="square has-text-centered" onClick={() => saveColour(colour)} style={style}>
  </div>
}
