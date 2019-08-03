import React from 'react';
import Home from './Home';
import Lista from './Lista';
import './App.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';

// function App() {
  class App extends React.Component{

 render (){
  return (
    <BrowserRouter>
    <div className="App">
    <h1 className="Title" style={{display:'inline-block'}}> The App</h1>  
    <br></br>
    <Link to="/">Inicio</Link> | <Link to="/Lista">Lista</Link>
    <Route path="/" exact component={Home}></Route>
    <Route path="/Lista" component={Lista}></Route>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
