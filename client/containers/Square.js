import {connect} from 'react-redux'

import Square from '../components/Square'

const mapStateToProps = ({size}) => {
  return {
    size
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveColour: (colour) => dispatch({type: 'SAVE_COLOUR', colour})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)
