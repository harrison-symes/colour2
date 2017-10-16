export default function speedReducer (state = 1, action) {
  switch(action.type) {
    case 'INIT':
      return 1
    case 'CHANGE_SPEED':
      return action.speed
    case 'ALTER_SPEED':
      const newSpeed = state + action.increment
      if (newSpeed < 0 || newSpeed > 10) return state
      else return newSpeed
    default:
      return state
  }
}
