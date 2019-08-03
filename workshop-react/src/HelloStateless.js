import React from 'react';

function HelloStateless(props){
    return <div style={ {fontWeight: 'bold', color: 'red'} } className="stateless">Hello, {props.nome} {props.sobrenome}</div>
}

export default HelloStateless;