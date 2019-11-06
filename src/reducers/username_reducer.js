
export default function(state = null, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      return action.payload;
    default:
      return state;
  }
}
