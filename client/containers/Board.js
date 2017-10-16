import {connect} from 'react-redux'

import Board from '../components/Board'

const mapStateToProps = ({speed, size, board, savedColours}) => {
  return {
    speed,
    size,
    board,
    savedColours
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => dispatch({type: 'INIT'}),
    tick: (board) => dispatch({type: 'TICK_BOARD', board}),
    saveColour: (colour) => dispatch({type: 'SAVE_COLOUR', colour})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
