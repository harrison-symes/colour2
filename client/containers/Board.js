import {connect} from 'react-redux'

import Board from '../components/Board'

const mapStateToProps = ({speed, size, board}) => {
  return {
    speed,
    size,
    board
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => dispatch({type: 'INIT'}),
    tick: (board) => dispatch({type: 'TICK_BOARD', board})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
