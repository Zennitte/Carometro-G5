import React, { useEffect } from "react";
import { useState } from "react";

<<<<<<< HEAD
import foto_perfil from '../../assets/img/foto_perfil.png'
import '../../assets/css/adm.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import api from "../../services/api"



export default function Cadastrar() {
    const [isLoading, setIsLoading] = useState(false);
    const [nomeAluno, setNomeAluno] = useState('');
    const [dataNascimento, setDataNascimento] = useState(new Date())
    const [idSala, setIdSala] = useState(0)
    const [idTurma, setIdTurma] = useState(0)
    const [idPeriodo, setIdPeriodo] = useState(0)
    const [idAluno, setIdAluno] = useState(0)
    const [idRa, setIdRa] = useState(0)
    // const listaPeriodo = [1, 2]
    const listaTurma = [1, 2]


    function BuscarAlunos() {
        api('/Alunos', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

            .then(resposta => {
                if (resposta.status === 200) {
                    console.log(resposta)
                    setIdPeriodo(resposta.data)
                }
            })
            .catch(erro => console.log(erro))
    }

    useEffect(BuscarAlunos, []);

    


    function AlterarAluno(event) {
        setIsLoading(true)

        let alunos = {
            idSala: idSala,
            nomeAluno: nomeAluno,
            dataNascimento: dataNascimento,
            ra: idRa
        }

        api.put('/Alunos/' + idAluno, alunos, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then((resposta) => {
                if (resposta.status === 200) {
                    console.log('Aluno Atualizado')

                    BuscarAlunos();
                    setIsLoading(false);
                }
            })
            .catch(erro => console.log(erro), setInterval(() => {
                setIsLoading(false);
            }, 5000));
    }


    return (
        <div >
            <Header />
            <section className="container_adm" >
                <div >

                    <form className="display" onSubmit={AlterarAluno} >

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
                                <button type="submit" className="btn btn_cadastro"  >Alterar</button>
                            }
                            {
                                isLoading === true &&
                                <button type="submit" disabled className="btn btn_cadastro">Loading...</button>
                            }
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
=======
export default function Alterar() {
    return(
        <div>
            <h1>Home</h1>
>>>>>>> abe2f2ec3a55a6f524ddb0e36cbac09bc3a8d9a9
        </div>
    )
}