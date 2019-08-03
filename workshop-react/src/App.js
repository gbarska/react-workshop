import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HelloStateless from './HelloStateless';
import HelloStatefull from './HelloStatefull';

function App() {
  return (
    <div>
      <HelloStateless nome="Gustavo" sobrenome="Barska"></HelloStateless>
      <HelloStatefull nome="My"></HelloStatefull>
    </div>
  );
}

export default App;
