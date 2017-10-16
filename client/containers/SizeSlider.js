import {connect} from 'react-redux'
import SizeSlider from '../components/SizeSlider'

const mapStateToProps = ({size}) => {
  return {
    size
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    slide: (size) => dispatch({type: 'GROW_BOARD', size})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SizeSlider)
