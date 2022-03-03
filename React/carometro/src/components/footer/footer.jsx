import React from "react";

import Logo from "../../assests/img/FaceCheck.svg";

import '../../assests/css/footer.css'

export default function Footer() {
  return (
   <footer className="container_footer">
       <img className="logo" src={Logo} alt='Logo'/>
   </footer>
  )
}
