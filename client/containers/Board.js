import {connect} from 'react-redux'

import Board from '../components/Board'

const mapStateToProps = ({board}) => {
  return {
    board
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => dispatch({type: 'INIT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
