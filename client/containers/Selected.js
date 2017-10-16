import {connect} from 'react-redux'

import Selected from '../components/Selected'

const mapStateToProps = ({savedColours}) => {
  return {
    colours: savedColours
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    unSelect: (colour) => dispatch({type: 'REMOVE_COLOUR', colour})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selected)
