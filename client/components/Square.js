import React from 'react'

export default function Square ({colour, saveColour, size, savedColours, isCircles}) {
  const height = `${80 / size}vh`
  var style = {
    height,
    width: height,
    background: colour.colour,
    cursor: 'pointer',
    borderRadius: isCircles ? '25vh' : '0'
  };
  if (savedColours.find(c => c == colour)) style.borderRadius = '5vh'
  return <div className="square has-text-centered" onClick={() => saveColour(colour)} style={style}>
  </div>
}
