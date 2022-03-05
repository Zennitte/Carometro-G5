import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {Sidebar} from "../../components/sidebar/SideBar"

import "../../assets/css/home.css";

import api from "../../services/api";

export default function Home() {
  const [listaSalas, setListaSalas] = useState([]);

  function listarSalas() {
    api('/Salas')
    .then(resposta => {
      if (resposta.status === 200){
        console.log('Lista')
        console.log(resposta)
        setListaSalas(resposta.data)
      }
    })
    .catch(erro => console.log(erro))
  }

  useEffect(listaSalas, []);

  return (
    <>  
      <Header />
      <section className="container_home">
        <h2 className="titulo_periodo" style={{ marginTop: 50 }}>
          Período Tarde
        </h2>
        <div>
          {listaSalas.map((sala) => {
            return (
              <div key={sala.idSala}>
                <h3>{sala.nomeSala}</h3>
              </div>
            );
          })}
        </div>
        <h2 className="titulo_periodo">Período Manhã</h2>
        <div>
                {listaSalas.map((sala) =>{
                    return(
                        <div key={sala.idSala}>
                            <h3>{sala.nomeSala}</h3>
                        </div>
                    )
                })}
            </div>
      </section>
      <Footer />
    </>
  );
}
