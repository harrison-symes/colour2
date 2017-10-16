export default function sizeReducer (state = 1, action) {
  switch(action.type) {
    case 'INIT':
      return 1
    case 'CHANGE_SPEED':
      return action.speed
    default:
      return state
  }
}
