import {connect} from 'react-redux'

import Selected from '../components/Selected'

const mapStateToProps = ({savedColours}) => {
  return {
    colours: savedColours
  }
}

export default connect(mapStateToProps)(Selected)
