import React from 'react';
import './cadastro.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <div className='login'>
      <form action="" className='novo_log'>
          <h1>Login</h1>
          <p><a href="myaccount.google.com" target='_blank'>Entrar com o google</a></p>
          
      
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" required/><br />
            <label htmlFor="">Senha</label>
            <input type="password" name="" id="" required/>
            <p><a href="" className='esq'>Esqueci minha senha</a></p>
            <button>Entrar</button>
            <Link to="/"><button>Voltar</button></Link>
          </form>
    </div>
    

     </>
  )
}

export default Login;
