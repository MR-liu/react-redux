import { createStore } from '../redux/redux';
import combineReducer from '../redux/combineReducer';
import reducerCount from './reducerCount'
import reducerTodo from './reducerTodo'

const reducer =  combineReducer({
  reducerTodo,
  reducerCount,
})

console.log(reducer)

const store = createStore(reducer)

export default store;