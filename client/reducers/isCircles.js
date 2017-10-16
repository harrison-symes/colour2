export default function isCirclesReducer (state = false, action) {
  switch(action.type) {
    case 'SWITCH':
      return !state
    default:
      return state
  }
}
