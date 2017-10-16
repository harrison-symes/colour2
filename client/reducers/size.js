export default function sizeReducer (state = 3, action) {
  switch(action.type) {
    case 'INIT':
      return 3
    case 'GROW_BOARD':
      return action.size
    default:
      return state
  }
}
