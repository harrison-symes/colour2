export default function sizeReducer (state = 3, action) {
  switch(action.type) {
    case 'GROW_BOARD':
      console.log({action})
      return action.size
    default:
      return state
  }
}
