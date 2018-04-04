import React, { Component } from 'react';
import OrganizeChart from 'orgchart';
import logo from './logo.svg';
import './App.css';

import data from './data.js'; 

const MyCom = ({node})=>{
  return (
    <div onClick={() => alert(`点击${node.name}`)}>
      <span>{node.name}</span>
      <p>介绍</p>
    </div>
  )
}


class App extends Component {

  render() {

    let nodeStyle = {
    };
    let lineStyle = {
      width: '4px',
      color: '#ff88ff',
      style: 'dashed'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">欢迎使用Organize组件</h1>
        </header>
        <div className="App-intro">
          <OrganizeChart orgData={ data } orgNode={ MyCom } width="500" nodeStyle={ nodeStyle } line={ lineStyle } />
        </div>
      </div>
    );
  }
}

export default App;
