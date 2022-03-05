import React, { useEffect } from "react";
import { useState } from "react";

import foto_perfil from '../../assets/img/foto_perfil.png'
import '../../assets/css/adm.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import api from "../../services/api"
import { Sidebar } from "../../components/sidebar/SideBar";



export default function Cadastrar() {
    const [isLoading, setIsLoading] = useState(false);
    const [nomeAluno, setNomeAluno] = useState('');
    const [dataNascimento, setDataNascimento] = useState(new Date())
    const [idSala, setIdSala] = useState(0)
    const [idTurma, setIdTurma] = useState(0)
    const [idPeriodo, setIdPeriodo] = useState(0)
    const [idRa, setIdRa] = useState(0)
    // const listaPeriodo = [1, 2]
    const listaTurma = [1, 2]


    function BuscarPeriodo() {
        api('/Periodos', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

            .then(resposta => {
                if (resposta.status === 200) {
                    setIdPeriodo(resposta.data)
                }
            })
            .catch(erro => console.log(erro))
    }

    let alunos = {
        idSala: idSala,
        nomeAluno: nomeAluno,
        dataNascimento: dataNascimento,
        ra: idRa
    }


    function CadastrarAluno(event) {
        event.preventDefault();
        api.post('/Alunos', alunos, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(response => {
                if (response.status === 201) {
                    console.log('Aluno cadastrado')
                    setDataNascimento(new Date());
                    setIdSala(0);
                    setNomeAluno('');
                    setIdRa(0);
                }
            }).catch(erro => { console.log(erro) })
    }


    useEffect(BuscarPeriodo, []);

    return (
        <div >
            <Header />
            <Sidebar />
            <section className="container_adm" >
                <div >

                    <form className="display" onSubmit={CadastrarAluno} >

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
                                value={nomeAluno}
                                onChange={(campo) => setNomeAluno(campo.target.value)}
                            />
                            <input
                                className="input"
                                type="text"
                                name="ra"
                                placeholder="RA do Aluno"
                                value={idRa}
                                onChange={(campo) => setIdRa(campo.target.value)}
                            />

                            {/* <input
                                className="input"
                                type="file"
                                name="arquivo"
                                placeholder="Foto do Aluno"
                            // value={}
                            // onChange={}                
                            /> */}

                            <select
                                className="input"
                                name="Turma"
                                value={idTurma}
                                onChange={(campo) => setIdTurma(campo.target.value)}
                            >
                                <option value="0">Turmas</option>
                                <option value={listaTurma[0]}> 1A </option>
                                <option value={listaTurma[1]}> 1B </option>
                            </select>

                            {/* <select
                                className="input"
                                name="periodo"
                                value={idPeriodo}
                                onChange={(campo) => setIdPeriodo(campo.target.value)}
                            >
                                <option value="0"> Selecione o Periodo</option>
                                <option value={listaPeriodo[0]}> Manhã </option>
                                <option value={listaPeriodo[1]}> Tarde </option>

                            </select> */}




                            <input
                                className="input"
                                type="date"
                                name="dataDeNascimento"
                                value={dataNascimento}
                                onChange={(campo) => setDataNascimento(campo.target.value)}
                            />
                            {
                                isLoading === false &&
                                <input type="submit" className="btn btn_cadastro" value="Cadastrar" />
                            }
                            {
                                isLoading === true &&
                                <input type="submit" disabled className="btn btn_cadastro" value="Loading..." />
                            }
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}