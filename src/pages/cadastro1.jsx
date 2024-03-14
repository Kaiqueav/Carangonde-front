import React from 'react';
import { Link } from 'react-router-dom';
import './cadastro.css'

const Cadastro = () => {

  return (
    <>
    <section className='bg'>
        
        <form action="" className='novo'>
          <h1>CADASTRO</h1>
          <h3 htmlFor=""><a href="">Cadastrar com o Google</a></h3>
          <label htmlFor="">Nome Completo</label>
          <input type="text" name="" id="" /><br />
          <label htmlFor="">Email</label>
          <input type="text" name="" id="" /><br />
          <label htmlFor="">Senha</label>
          <input type="password" name="" id="" /><br />
          <label htmlFor="">CPF</label>
          <input type="number" name="" id="" /><br />
          <label htmlFor="">Data de nascimento</label>
          <input type="date" name="" id="" /><br />
          <button >Cadastrar</button>
          <Link to="/"><button>Voltar</button></Link>
        </form>
        </section>
    </>
  )
}

export default Cadastro;
