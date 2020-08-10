import { INSCREACE, DESCREACE } from './action';
const interfacestate = {
  number: 0,
}


const reducer = (state = interfacestate, action) => {
  if (!action) return state;

  console.log(action, INSCREACE, DESCREACE)
  switch (action.type) {
    case INSCREACE:
      return {
        number: state.number + 1
      }
    case DESCREACE:
      return {
        number: state.number - 1
      }
    default:
      return state
  }
}

export default reducer;
