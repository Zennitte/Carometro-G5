import React from "react";
import { useState } from "react";

import logo from '../../assests/image/FaceChecklogo.svg'
import '../../assests/css/adm.css'


export default function Adm() {
    const [isLoading, setIsLoading] = useState(false);
    const [nome, setNome] = useState('');
    const [periodo, setPeriodo] = useState('');



    return (
        <div>
            <main className="fundo">
                <div>

                    <select
                    name="Turma"
                    id="idTurma"               
                    >
                        <option value="0">Turmas</option>
                    </select>

                    <a className="" href="#"> Cadastrar</a>

                    <a className="" href="#"> Editar</a>

                    <a className="" href="#"> Excluir</a>

                </div>

                <div>
                    <img
                    src={logo}
                    alt=""                    
                    />

                    <input
                    // className=""
                    type="name"
                    name="nome"
                    // value={}
                    // onChange={}                
                    />

                    <select 
                    // className=""
                    name="periodo"
                    // value={}
                    // onChange={}
                    >
                        <option value="0">Periodo</option>
                    </select>


                    <select 
                    // className=""
                    name="Turma"
                    // value={}
                    // onChange={}
                    >
                        <option value="0">Turmas</option>
                    </select>
                    <input
                    // className=""
                    type="datetime-local"
                    name="dataDeNascimento"
                    // value={}
                    // onChange={}
                    />
                    {
                            isLoading === true && (
                                <button
                                    type="submit"
                                    disabled
                                    className=""
                                    id=""
                                >
                                    Loading...
                                </button>
                            )
                        }

                        {

                            isLoading === false && (
                                <button
                                    className=""
                                    id=""
                                    type="submit"
                                    disabled={
                                        nome === '' || periodo === ''
                                            ? 'none'
                                            : ''
                                    }
                                >
                                    Cadastrar
                                </button>
                            )                   
                        }
                </div>
            </main>
        </div>
    )
}