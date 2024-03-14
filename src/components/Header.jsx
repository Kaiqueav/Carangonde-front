import React from 'react'
import { Link } from 'react-router-dom'; 
import './Header.css'
import { useState } from 'react'
import imglogo from '../assets/logo.png'
import cad from '../pages/cadastro1'
import log from '../pages/login'

export const Header = () => {
  return (
        
       <header>
           <a href=""> <img src={imglogo} alt=""  /></a>
            <ul className='menu'>
                <li >
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Quem somos</a>
                </li>
                <li>
                    <a href="">Contato</a>
                </li>
            </ul>

            <aside>
             <Link to="/cadastro"> <p>CADASTRAR</p> </Link>
             <Link to="/login"> <p className='loginn'>LOGIN</p> </Link>
              
            </aside>
            </header>
    

  )
}
