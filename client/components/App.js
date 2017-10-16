import React from 'react'
import Board from '../containers/Board'
import SizeSlider from '../containers/SizeSlider'
import IntervalSlider from '../containers/IntervalSlider'

module.exports = ({state, dispatch}) => {

  // console.log(renderSquares(state.colourArray))
  // console.log(state.colourArray);
  return <div>
    <Board />
    <SizeSlider />
    <IntervalSlider />
  </div>
}
