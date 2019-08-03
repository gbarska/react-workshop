import React from 'react';
import HelloStateless from './HelloStateless';
import HelloStatefull from './HelloStatefull';
import HelloForm from './HelloForm';

class Home extends React.Component{
    state = {
        exibeDados: true
      }
  
      componentDidMount(){
        setTimeout(()=>{
          this.setState({
            exibeDados: false
          })
        },3000);
      }
  
   render (){
  let name = "new name";
  
  if(this.state.exibeDados){
    name = 'other name'
  }
  
    return (
      <div className="App">
        <HelloStateless nome="Gustavo" sobrenome="Barska"></HelloStateless>
        {this.state.exibeDados ? <HelloStatefull nome={name}></HelloStatefull> : null}
        {this.state.exibeDados && <HelloStatefull nome={name}></HelloStatefull>}
        <HelloStatefull nome={name}></HelloStatefull>
        <HelloForm></HelloForm>
      </div>
    );
  }
}

export default Home;