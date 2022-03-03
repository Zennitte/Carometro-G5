import React, {useState, useEffect} from "react";
import Header from '../../components/header/header'
import Footer from "../../components/footer/footer";

import '../../assests/css/home.css'

export default function Home() {
    const [manha, setManha] = useState([]);
    const [tarde, setTarde] = useState([]);

    async function listaManha(params) {
        
    }

    return(
       <>
        <Header/>
        <section className="container_home">
            <h2 className="titulo_periodo" style={{marginTop: 50}}>Período Tarde</h2>
            {/* <div>
                {list.map((sala) => {
                    return(
                        <div key={sala.idSala}>
                            <h3>{sala.nomeSala}</h3>
                        </div>
                    )
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
        <Footer/>
       </>
    )
}