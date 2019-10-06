import React from 'react';
import logo from './assets/logo.svg';
import {Button,message} from 'antd'
import './assets/App.css';

function App() {
  const handleClick=(event,data)=>{
    console.log(event)
    console.log(data)
    message.success('成功了。。。。')
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p> 黎在亚</p>
        <Button type="primary" onClick={(event)=>{handleClick(event,123)}}> 按钮</Button>
        <Button type="primary" onClick={handleClick.bind(this,123)}> 按钮</Button>
      </header>
    </div>
  );
}

export default App;
