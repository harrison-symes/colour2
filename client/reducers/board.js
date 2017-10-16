import randomiser from '../functions/randomiser'

export default function boardReducer (state = [], action) {
  switch(action.type) {
    case 'INIT':
      return randomiser.populateArray(randomiser.generateArray(3))
    case 'GROW_BOARD':
      return randomiser.populateArray(randomiser.generateArray(action.size))
    case 'ALTER_SIZE':
      if (action.size < 3 || action.size > 49) return state
      return randomiser.populateArray(randomiser.generateArray(action.size))
    case 'SHUFFLE':
      return randomiser.shuffleBoard([...state])
    case 'TICK_BOARD':
      return [...action.board]
    default:
      return state
  }
}
