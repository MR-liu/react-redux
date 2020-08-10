import React from 'react';
import { ADD, DELETE} from '../commonRedux/action';
import store from '../commonRedux/store';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      list: store?.getdata()?.reducerTodo.list,
    }
  }

  componentWillMount() {
    store.subscribe(() => {
      console.log('store', store.getdata()?.reducerTodo.list);
      this.setState({
        list: store.getdata().reducerTodo.list
      })
    })
  }

  render () {
    console.log('22222', this)
    return (<div>
      <input value={this.state.text} onChange={(e) => {
        this.setState({
          text: e.target.value
        })
      }} />
      <button onClick={() => {
        store.dispatch({
          type: ADD,
          text: this.state.text
        })
        this.setState({
          text: ''
        })
      }}>todo</button>
      <ul>
        {
          this.state.list?.map((i, index) => <li>{i}<button onClick={() => store.dispatch({ type: DELETE, index})}>delete</button></li>)
        }
      </ul>
    </div>)
  }
}

export default Todo;
