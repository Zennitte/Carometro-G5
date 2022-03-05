import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {Sidebar} from "../../components/sidebar/SideBar"

<<<<<<< HEAD
export default function Home() {
    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}
=======
import "../../assets/css/home.css";

import api from "../../services/api";

export default function Home() {
  const [filtroManha, setFiltroManha] = useState([]);
  const [filtroTarde, setFiltroTarde] = useState([]);
  const [manha, setManha] = useState([]);
  const [tarde, setTarde] = useState([]);

  function listaManha(params) {
    api
      .get("/Salas")
      .then((resposta) => {
        if (resposta.status === 200) {
          setFiltroManha(resposta);

          setManha(
            filtroManha.filter((sala) => {
              return sala.id === 1;
            })
          );

          console.log(manha);
        }
      })
      .catch((erro) => console.log(erro));
  }

  async function listaTarde() {
    await api
      .get("/Salas")
      .then((resposta) => {
        if (resposta.status === 200) {
          setTarde(resposta);
        }
      })
      .catch((erro) => console.log(erro));
  }

  useEffect(listaManha);

  return (
    <>  
      <Header />
      <section className="container_home">
        <h2 className="titulo_periodo" style={{ marginTop: 50 }}>
          Período Tarde
        </h2>
        {/* <div>
          {manha.map((sala) => {
            return (
              <div key={sala.idSala}>
                <h3>{sala.nomeSala}</h3>
              </div>
            );
          })}
        </div> */}
        <h2 className="titulo_periodo">Período Manhã</h2>
        {/* <div>
                {list.map((sala) =>{
                    return(
                        <div key={sala.idSala}>
                            <h3>{sala.nomeSala}</h3>
                        </div>
                    )
                })}
            </div> */}
      </section>
      <Footer />
    </>
  );
}
>>>>>>> abe2f2ec3a55a6f524ddb0e36cbac09bc3a8d9a9
