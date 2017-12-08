import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './component/common/AppBar/AppBar'
import CheckBox from './component/common/CheckBox/CheckBox'
import CustomList from './component/custom/CustomList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomList/>
      </div>
    )
  }
}

export default App;
