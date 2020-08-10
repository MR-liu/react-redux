import React from 'react';
import './App.css';
// import Count from './demo/Count.jsx';
import Provider from './redux/Provider'
import Count from './Count/Count';
import Tode from './Todo/index'
import store from './commonRedux/store'

function App() {
  return (
    <Provider store={store}>
      <Count />
      <Tode />
    </Provider>
  );
}

export default App;
