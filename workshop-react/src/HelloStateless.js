import React from 'react';

function HelloStateless(props){
    return <div class="stateless">Hello, {props.nome} {props.sobrenome}</div>
}

export default HelloStateless;