import { useState } from 'react'
import imgcurso from '../assets/sobrenos.png'
import './sobre.css'

function Sobre(){
    return(

        <section className='sobre_nos'>
            <h2>Sobre Nós</h2>
            <div className='div_nos'>
            <div className='texto_nos'>
                <p>A Carangondé, uma ONG sem fins lucrativos, tem como missão auxiliar pessoas em situação de 
                    vulnerabilidade social, com o objetivo de ampliar sua atuação e facilitar o acesso aos 
                    seus serviços. A nossa plataforma servirá para diponibilizar cursos gratuitos após o cadastro. 
                    Essa iniciativa reflete o compromisso da organização em promover uma melhoria substancial na 
                    qualidade de vida das comunidades atendidas com o acesso facilitado à educação e ao 
                    desenvolvimento pessoal.</p>
            </div>
            <div className='foto_nos'>
                <img src={imgcurso} alt="cursos" />
            </div>
            </div>
        </section>

    )
}

export default Sobre;