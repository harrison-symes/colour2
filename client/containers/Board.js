import {connect} from 'react-redux'

import Board from '../components/Board'

const mapStateToProps = ({speed, size, board, savedColours, isCircles}) => {
  return {
    speed,
    size,
    board,
    savedColours,
    isCircles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => dispatch({type: 'INIT'}),
    tick: (board) => dispatch({type: 'TICK_BOARD', board}),
    saveColour: (colour) => dispatch({type: 'SAVE_COLOUR', colour}),
    reset: () => dispatch({type: 'INIT'}),
    switchCircles: () => dispatch({type: 'SWITCH'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
