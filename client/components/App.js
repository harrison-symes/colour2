import React from 'react'
import Board from '../containers/Board'

module.exports = ({state, dispatch}) => {

  // console.log(renderSquares(state.colourArray))
  // console.log(state.colourArray);
  return <div className="is-fullheight">
    <h1 className=" title is-1 has-text-centered">Colour (2)</h1>
    <hr />
    <div className="hero-body">
      <Board />
    </div>
    {/* <div className="hero-foot">Hello</div> */}
  </div>
}
