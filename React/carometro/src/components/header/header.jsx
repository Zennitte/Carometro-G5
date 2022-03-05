import React from "react";

import Logo from "../../assets/img/FaceCheck.svg";

<<<<<<< HEAD
import '../../assets/css/header.css'
=======
import { useHistory } from "react-router-dom";

import "../../assets/css/header.css";
>>>>>>> abe2f2ec3a55a6f524ddb0e36cbac09bc3a8d9a9

export default function Header() {
  let history = useHistory;

  function logOut() {
    localStorage.removeItem("usuario-login");

    history.push("/login");
  }

  return (
    <header className="container_header">
      <div className="grid_header">
        <div>
          <img className="header_logo" src={Logo} alt="Logo" />
        </div>
        <button onClick={logOut} className="button">Sair</button>
      </div>
    </header>
  );
}
