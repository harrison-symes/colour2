import randomiser from '../functions/randomiser'

export default function boardReducer (state = [], action) {
  switch(action.type) {
    case 'INIT':
      return randomiser.populateArray(randomiser.generateArray(3))
    case 'GROW_BOARD':
      console.log(action.size)
      return randomiser.populateArray(randomiser.generateArray(action.size))
    case 'TICK_BOARD':
      return [...action.board]
    default:
      return state
  }
}
