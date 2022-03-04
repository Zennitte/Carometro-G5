import React from "react";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import '../../assets/css/aluno.css'

export default function Aluno() {
  return (
    <>
      <Header />
      <section className="container_aluno">
        <h2 className="titulo_aluno" style={{ marginTop: 50 }}>
            Alunos
        </h2>
        {/* <div>
            {list.map((aluno) => {
                return(
                    <div key={aluno.idAluno}>
                        <img src={aluno.imagem}/>
                    </div>
                )
            })}
        </div> */}
      </section>
      <Footer />
    </>
  );
}
