export default function sizeReducer (state = 3, action) {
  switch(action.type) {
    case 'CHANGE_SPEED':
      return action.speed
    default:
      return state
  }
}
