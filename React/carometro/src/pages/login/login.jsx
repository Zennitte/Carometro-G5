import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

<<<<<<< HEAD
import api from "../../services/api";

import logo from '../../assets/img/FaceCheck.svg'
import '../../assets/css/login.css'


export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [erroMensagem, setErroMensagem] = useState('');

    let history = useHistory();

    function efetuarLogin(event) {

        event.preventDefault();

        setErroMensagem('')
        setIsLoading(true)

        api.post('/Login', {
            email: email,
            senha: senha
        })

            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('usuario-login', response.data.token)

                    setSenha('')

                    setEmail('')

                    setIsLoading(false)

                    history.push('/adm')
                }
            })
            .catch(erro => {
                console.log(erro)

                // setSenha('')

                setErroMensagem("E-mail e/ou Senha inválidos")

                setIsLoading(false)
            })
    }

    return (
        <div >
            <main className="fundo_login">
                <div className="imagem">
                    <img
                        className="logo"
                        src={logo}
                        alt="Logo"
                    />
                </div>
                <form onSubmit={efetuarLogin} >
                    <div className="inputs">

                        <input
                            type="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            className="input_login"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />

                        <input
                            type="password"
                            name="senha"
                            placeholder="Digite sua senha"
                            className="input_login"
                            onChange={(e) => setSenha(e.target.value)}
                            value={senha}
                        />


                        <span className='red'>{erroMensagem === '' ? '' : 'Email ou senha inválidos'}</span>
                        {
                            isLoading === true && (
                                <button
                                    type="submit"
                                    disabled
                                    className="btn_login"
                                    id="btn_login"
                                >
                                    Loading...
                                </button>
                            )
                        }

                        {

                            isLoading === false && (
                                <button
                                    className="btn_login btn"
                                    id="btn_login"
                                    type="submit"
                                    disabled={
                                        email === '' || senha === ''
                                            ? 'none'
                                            : ''
                                    }
                                >
                                    Login
                                </button>
                            )
                        }
                    </div>
                </form>
            </main>
=======
export default function Login() {
    return(
        <div>
            <h1>Login</h1>
>>>>>>> abe2f2ec3a55a6f524ddb0e36cbac09bc3a8d9a9
        </div>
    )
}