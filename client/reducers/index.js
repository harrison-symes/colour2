import {combineReducers} from 'redux'

import board from './board'
import size from './size'
import interval from './interval'

export default combineReducers({
  board,
  size,
  speed: interval
})
