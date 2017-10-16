export default function savedColoursReducer (state = [], action) {
  switch(action.type) {
    case 'SAVE_COLOUR':
    console.log(action)
      const newState = [...state].filter(colour => colour != action.colour)
      return [...newState, action.colour]
    case 'REMOVE_COLOUR':
      return [...state].filter(colour => colour != action.colour)
    default:
      return state
  }
}
