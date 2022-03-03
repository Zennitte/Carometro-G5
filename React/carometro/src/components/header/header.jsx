import React from "react";

import Logo from "../../assets/img/FaceCheck.svg";

import '../../assets/css/header.css'

export default function Header() {
  return (
    <header className="container_header">
      <div className="grid_header">
        <div>
          <img className="header_logo" src={Logo} alt="Logo" />
        </div>
        <button className="button">
          Sair
        </button>
      </div>
    </header>
  )
}
