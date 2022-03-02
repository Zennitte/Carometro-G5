import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import logo from '../../assests/image/FaceChecklogo.svg'
import '../../assests/css/login.css'


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
            emailUsuario: email,
            senhaUsuario: senha
        })

            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('usuario-login', response.data.token)

                    setSenha('')

                    setEmail('')

                    setIsLoading(false)

                    history.push('/home')
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
                <form onChange={efetuarLogin} >
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
        </div>
    )
}