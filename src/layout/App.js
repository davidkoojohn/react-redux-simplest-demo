import React, { Component } from 'react';
import '../styles/App.css';

import {connect} from 'react-redux';
import { deleteItem } from '../redux/actions/ItemAction'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let { items, onValueShow } = this.props

    return (
      <div className="App">
        <h1 className="text-center">hello react+redux demo!</h1>
        <ol>
          {items.map((item, index) =>
            <li key={index} onClick={(e) => onValueShow(e, index)}>{item.title}</li>
          )}
        </ol>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onValueShow(e, index) {
      dispatch(deleteItem(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
