const createStore = (reducer) => {
  let state;

  let listeners = [];

  const getdata = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);

    listeners.map(listener => listener())
  }

  const subscribe = (listener) => {
    listeners.push(listener);

    return listeners.filter(e => {
      return e !== listener
    })
  }

  return {
    getdata,
    dispatch,
    subscribe
  }
}

export {
  createStore,
} 