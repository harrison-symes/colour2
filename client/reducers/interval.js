export default function sizeReducer (state = 1, action) {
  switch(action.type) {
    case 'CHANGE_SPEED':
      return action.speed
    default:
      return state
  }
}
