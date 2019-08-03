import  React from 'react';

class Lista extends React.Component{
    state = {
        linguagens: []
    }

componentDidMount(){
    fetch('https://alefesouza.dev/api/languages.php')
        .then(res => res.json())
        .then(res =>{
            console.log(res);

            this.setState({
                linguagens: res
            })
        })
}

    render(){
        return <div>
        <hr></hr>
        {this.state.linguagens.map(item => (
            <li key ={item.id}>
                <p><b>Linguagem:</b>{item.name}</p>
                <p><b>Criador:</b>{item.creator}</p>
                <p><b>Ano:</b>{item.year}</p>
            </li>
        ))}
        </div>
    }
}

export default Lista;