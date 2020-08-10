import { ADD, DELETE} from './action';
const insterfaceState = {
  list: []
};

const reducer = (state = insterfaceState, action) => {
  if (!action) return state;

  switch (action.type) {
    case ADD:
      state.list.push(action.text)
      return state
    case DELETE:
      console.log(action)
      state.list = state.list.filter((i, index) => index !== action.index)
      return state;
    default:
      return state
  }
}

export default reducer;
