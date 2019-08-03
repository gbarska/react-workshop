import React from 'react';

class HelloForm extends React.Component{
    state = {
        texto: ''
    }

    handleChange(e){
        console.log(e);
        this.setState({
            texto: e.target.value
        })
    }

    handleClick(){
        alert(this.state.texto);
    }

    render(){
        return <div><h1>A react form</h1>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <div>{this.state.texto}</div>
        <button onClick={this.handleClick.bind(this)}>Click me</button>
        </div>
    }
}

export default HelloForm;