import { useState } from 'react'
import imgcidadania from '../assets/cidadania.png'
import imgconstrucao from '../assets/construcao.png'
import imgregulairzacao from '../assets/regulairzacao.png'
import imgcurso from '../assets/curso.png'
import './options.css'

function OPTIONS(){
    return(
        <section>
        <div className='imgvistapraia'>
            <div className='sobrenos'>
                <h1>O QUE FAZEMOS</h1>
                <h4>Na nossa ONG, acreditamos que o conhecimento é o 
                primeiro passo para a transfomação</h4>
            </div>
            <div className='maissobre'>
                <div className='cidadania'>
                    <img src={imgcidadania} alt="" />
                    <h5>CIDADANIA</h5>
                    <p>Nas vastas extensões rurais da Bahia, muitas famílias enfrentam 
                        desafios diários para acessar serviços básicos e exercer seus direitos como cidadãos. 
                        Nossa ONG está empenhada em estender uma mão solidária a essas comunidades, 
                        oferecendo apoio em questões educacionais e sociais.</p>
                </div>
                <div className='construção'>
                    <img src={imgconstrucao} alt="" />
                    <h5>CONSTRUÇÃO DE UNIDADES HABITACIONAIS</h5>
                    <p>Nos dedicamos a construir unidades habitacionais nas áreas rurais da Bahia, 
                        proporcionando um refúgio estável e confortável para aqueles que mais necessitam.</p>
                </div>
                <div className='regularização'>
                    <img src={imgregulairzacao} alt="" />
                    <h5>REGULARIZAÇÃO FUNDIÁRIA </h5>
                    <p>Muitas famílias na Bahia enfrentam incertezas legais sobre a posse de suas terras. 
                        Nossa ONG está comprometida em auxiliar essas famílias na regularização de suas propriedades, garantindo-lhes 
                        segurança jurídica e promovendo o desenvolvimento sustentável das áreas rurais.</p>
                </div>
                <div className='curso'>
                    <img src={imgcurso} alt="" />
                    <h5>CURSOS GRATUITOS</h5>
                    <p>Os cursos gratuitos oferecem uma chance única de aprender e crescer sem 
                        custos adicionais. Eles abrem portas para novas habilidades. Os cursos
                        gratuitos são uma oportunidade valiosa para capacitar pessoas e transformar vidas.</p>
                </div>
            </div>
        </div>
        

    </section>
  
    )
}

export default OPTIONS  