import {combineReducers} from 'redux'

import board from './board'
import size from './size'
import interval from './interval'
import savedColours from './savedColours'

export default combineReducers({
  board,
  size,
  speed: interval,
  savedColours
})
