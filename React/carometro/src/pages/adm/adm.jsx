import React from "react";
import { useState } from "react";

<<<<<<< HEAD
import foto_perfil from '../../assets/img/foto_perfil.png'
import '../../assets/css/adm.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'


export default function Adm() {
    const [isLoading, setIsLoading] = useState(false);
    const [nome, setNome] = useState('');
    const [periodo, setPeriodo] = useState('');



    return (
        <>
            <Header />
            {/* <section className="container_adm">
                <div>
                            <img
                                className="foto_perfil"
                                src={foto_perfil}
                                alt="Adicione a sua foto"
                            />
                    <form className="input_container">

                        <div className="foto">

                        </div>

                       
                        
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
                                    Cadastrar
                                </button>
                            )
                        }
                    </form>
                </div>
            </section> */}

            <div>
                <a className="input" href="/cadastrar">Cadastrar</a>
                <a className="input" href="/alterar">Alterar</a>
                <a className="input" href="/excluir">Excluir</a>
            </div>
            <Footer />
        </>
=======
export default function Adm() {
    return(
        <div>
            <h1>Adm</h1>
        </div>
>>>>>>> abe2f2ec3a55a6f524ddb0e36cbac09bc3a8d9a9
    )
}