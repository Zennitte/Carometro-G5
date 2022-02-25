import React from "react";
import { useState } from "react";
import {useHistory} from "react-router-dom";


export default function Login() {
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [erroMensagem, setErroMensagem] = useState('');

    let history = useHistory();

    function logar(event) {
        event.preventDefault();
        
        setErroMensagem('')
        setIsLoading(true)
    }

    return(
        <div>
            <h1>Login</h1>
        </div>
    )
}