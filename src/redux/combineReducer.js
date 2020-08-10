const combineReducer = (reducers) => {
  return (state, action) => {
    let newstate = state ? state : {}
    state = !state ? {} : state

    for (const key in reducers) {
      newstate[key] = reducers[key](state[key], action) ;
    }

    return newstate;
  }
}
  

export default combineReducer;