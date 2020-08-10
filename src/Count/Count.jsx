import React from 'react';
import { INSCREACE, DESCREACE } from '../commonRedux/action';
import store from '../commonRedux/store';
import connet from '../redux/connet'

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: store?.getdata()?.reducerCount.number || 0
    }
  }

  componentWillMount() {
    store.subscribe(() => {
      this.setState({
        number: store?.getdata()?.reducerCount.number
      })
    })
  }

  render() {
    console.log(this.context)
    return (
      <>
        <p>{this.state.number}</p>
        <button onClick={() => store.dispatch({type: INSCREACE})}>+</button>
        <button onClick={() => store.dispatch({type: DESCREACE})}>-</button>
      </>
    )
  }
}

let mapStateToProps = (state) => ({
  number: state?.number,
})

let mapDispatchToProps = (dispatch) => (
  {
    onIncrease: () => dispatch({ type: INSCREACE }),
    onDecrease: () => dispatch({ type: DESCREACE })
  })

// connet(mapStateToProps)(Count)

export default connet(mapStateToProps, mapDispatchToProps)(Count)
