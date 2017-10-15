import randomiser from '../functions/randomiser'

export default function boardReducer (state = [], action) {
  switch(action.type) {
      case 'INIT':
      return randomiser.populateArray(randomiser.generateArray(3))
    default:
      return state
  }
}
