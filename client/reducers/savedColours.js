export default function savedColoursReducer (state = [], action) {
  switch(action.type) {
    case 'INIT':
      return []
    case 'SAVE_COLOUR':
      const newState = [...state].filter(colour => colour != action.colour)
      return [...newState, action.colour]
    case 'REMOVE_COLOUR':
      (action)
      return [...state].filter(colour => colour != action.colour)
    default:
      return state
  }
}
