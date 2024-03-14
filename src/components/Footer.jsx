import { useState } from "react";
import imglogo from '../assets/logo.png'
import './Footer.css'
import imginstagram from '../assets/instagram.svg'
import imgwhatsapp from '../assets/whatsapp.svg'
function Footer(){
    return (
        
       <footer> 
        <div className="dive">
        <img src={imglogo} alt="Logo Carangondé"></img>
        </div>
       
    
        <div className="div-img">
           <a href="" target="_blank"> <img src={imgwhatsapp}alt="logo wpp" /></a>
          <a  href="https://www.instagram.com/carangondecidadania_fsa/" target="_blank"> <img src={imginstagram} alt="logo insta" /></a> 
        </div>
        </footer>
    )
}



export default Footer