import React from 'react';
// import store from '../commonRedux/store';

const connect = (mapStateToProps, mapDispatchToProps) => {
  return (_component) => {
    return class Proxy extends React.Component {
      constructor() {
        super();
        // this.state = mapStateToProps(this.context?.store?.getdata())
      }

      // componentWillMount() {
      //   this.context.store.subscribe(() => {
      //     this.setState({
      //       ...this.context?.store.getdata()
      //     })
      //   })
      // }

      render() {
        console.log('1111', this)
        // eslint-disable-next-line react/jsx-pascal-case
        return <_component />
      }
    }
  }
}

export default connect;
