import React from 'react';

class HelloStatefull extends React.Component{
    state = {
        clicou: 'did not click the button yet'
    }

    handleClick(params) {
        this.setState({
            clicou: 'clicked' 
        })
        console.log('clicked...');
    }

    componentDidMount(){
        console.log('after the component is rendered...');
    }

    componentDidUpdate(){
        console.log('after the component was updated...');
    }

    componentWillUnmount(){
        console.log('before leaving the component..')
    }

    render(){
        return <div>Hello, {this.props.nome}
        <div>You {this.state.clicou}</div>
        <button onClick={this.handleClick.bind(this)}>Click me</button>
        </div>
        
    }
}

export default HelloStatefull;