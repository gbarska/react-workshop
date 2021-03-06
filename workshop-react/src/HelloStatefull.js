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

    componentDidUpdate(prevState,prevProps){
        console.log('the state was: ' + prevState);
        console.log('after the   component was updated...');

        console.log('the props were: '+ prevProps);
        console.log('the props now are: '+this.props);
    }

    componentWillUnmount(){
        console.log('before leaving the component..')
    }

    render(){
        return <div className="statefull" >Hello, {this.props.nome}
        <div>You {this.state.clicou}</div>
        <button onClick={this.handleClick.bind(this)}>Click me</button>
        </div>
        
    }
}

export default HelloStatefull;