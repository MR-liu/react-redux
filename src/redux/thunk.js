const { applyMiddleware, createStore } = require("redux");

let thunk = store => next => action => {
  if (typeof action === 'function') {
    return action(next);
  } else {
    return next(action)
  }
}

let store = applyMiddleware(thunk)(createStore)(counter);

store.dispatch(function(dispatch) {
  setTimeout(() => {
    dispatch({
      type: 'add'
    })
  }, 3000)
})