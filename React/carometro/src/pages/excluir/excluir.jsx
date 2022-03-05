import React from "react";
import { useState } from "react";

import foto_perfil from '../../assets/img/foto_perfil.png'
import '../../assets/css/adm.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
// import api from "../../services/api"



export default function Excluir() {
    const [isLoading, setIsLoading] = useState(false);
    const [nome, setNome] = useState('');
    const [periodo, setPeriodo] = useState('');
    


    return (
        <div className="container_adm">
            <Header />
            <section >
                <div >

                    <form  className="">

                        <div className="posicao_foto">
                            <img
                                className="foto_perfil"
                                src={foto_perfil}
                                alt="Adicione a sua foto"
                            />
                        </div>
                        <div className="input_container">

                            <input
                                className="input"
                                type="name"
                                name="nome"
                                placeholder="Nome do Aluno"
                            // value={}
                            // onChange={}                
                            />

                            <input
                                className="input"
                                type="file"
                                name="arquivo"
                                placeholder="Foto do Aluno"
                            // value={}
                            // onChange={}                
                            />

                            <select
                                className="input"
                                name="Turma"
                            // value={}
                            // onChange={}
                            >
                                <option value="0">Turmas</option>
                            </select>

                            <select
                                className="input"
                                name="periodo"
                            // value={}
                            // onChange={}
                            >
                                <option value="0">Periodo</option>
                            </select>




                            <input
                                className="input"
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
                                        className="btn btn_cadastro"
                                        id=""
                                    >
                                        Loading...
                                    </button>
                                )
                            }

                            {

                                isLoading === false && (
                                    <button
                                        className="btn btn_cadastro"
                                        id=""
                                        type="submit"
                                        disabled={
                                            nome === '' || periodo === ''
                                                ? 'none'
                                                : ''
                                        }
                                    >
                                        Excluir
                                    </button>
                                )
                            }
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}