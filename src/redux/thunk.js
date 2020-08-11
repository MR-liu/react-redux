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

store.subscribe(() => {
  console.log(store.getState())
})



// ================
let isPromise = obj => obj.then;

let promise = store => next => action => {
  if (isPromise(action)) {
    action.then((data) => next(data))
  }
  next(action)
}

let store = applyMiddleware(promise)(createStore)(counter);

store.dispatch(new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      type: 'add'
    })
  }, 3000)
}))