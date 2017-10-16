import {connect} from 'react-redux'
import IntervalSlider from '../components/IntervalSlider'

const mapStateToProps = ({speed}) => {
  return {
    speed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    slide: (speed) => dispatch({type: 'CHANGE_SPEED', speed})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntervalSlider)
