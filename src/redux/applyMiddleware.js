const { createStore } = require("redux");

const applyMiddleware = (middleware) => {
  return createStore => reducer => {
    let store = createStore(reducer);

    middleware = middleware(store);

    let dispatch = middleware(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}


let logger = store => next => action => {
  console.log(store.getstate()) // 老的数据

  next(action);

  console.log(store.getstate()) // 新的数据
}

let logger1 = function(store) {
  return function(next){
    return function(action) {

    }
  }
}

let store = applyMiddleware(logger)(createStore)(counter)