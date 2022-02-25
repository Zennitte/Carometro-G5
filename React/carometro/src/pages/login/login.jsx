import React from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

import api from "../../services/api";


export default function Login() {
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [erroMensagem, setErroMensagem] = useState('');

    let history = useNavigate();

    function logar(event) {
        event.preventDefault();
        
        setErroMensagem('')
        setIsLoading(true)

        api.post('/Login', {
            email: email,
            senha: senha
        })

        .then((response) => {
            if (response.status === 200) {
                localStorange.setItem('usuario-Login', response.data.token)

                setSenha('')

                setEmail('')

                setIsLoading(false)

                history.push('/home')
            }
        } )
        .catch(erro => {
            console.log(erro)

            setSenha('')

            setErroMensagem("E-mail e/ou Senha inválidos")

            setIsLoading(false)
        })
    }

    return(
        <div>
            <h1>Login</h1>
        </div>
    )
}