export default function sizeReducer (state = 3, action) {
  switch(action.type) {
    case 'INIT':
      return 3
    case 'GROW_BOARD':
      return action.size
    case 'ALTER_SIZE':
      const newSize = action.size
      if (newSize < 3 || newSize > 49) return state
      else return newSize
    default:
      return state
  }
}
