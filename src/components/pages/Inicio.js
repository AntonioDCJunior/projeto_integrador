import React from 'react';
import styles from './Inicio.module.css';
import { useState } from 'react';

import savings from '../../img/buscando_prestador.png'
import LinkButton from '../layout/LinkButton';
import Carrossel from './Carrossel';
import Perfil from '../profissoes/Perfil';
import InformacoesPessoais from '../profissoes/InformacoesPessoais';
import {FaDev, FaYoutube, FaLinkedin, FaGithub, FaMapMarkerAlt, FaRegEnvelope} from 'react-icons/fa';
import Cards from './Cards';





function Inicio () {
    

    return (
        
        <div>
        <section className={styles.home_container}>
            
            <h1>Bem-vindo ao<span> Indique Alguém</span></h1>
            <h2>Está buscando um prestador de serviço<span> para sua casa ou empresa?</span></h2>
            <h3>Aqui você encontra os melhores prestadores de serviços</h3>
            <p>A Indique Alguém vai te conectar a profissionais das mais diversas áreas</p>
            
            {/* <div className={styles.home_h3}>
                
                <h3>Você presta algum serviço?</h3>
                
                <p>A Indique alguém é um serviço online criado para eletricistas, diaristas e profissionais de serviços, como você. Conheça clientes e mostre seu trabalho para o mundo sem gastar 1 real!</p>
            </div> */}

            
            {/* <React.StrictMode>
                <Carrossel />
            </React.StrictMode> */}
            

            
            


        {/* <div className={styles.wraper}>
                
            <motion.div className={styles.carousel}>
                <motion.div className={styles.inner}>

                    {images.map(image => (
                        <motion.div key={image}>
                            <img src={image} alt="Texto alt" />
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
        </div> */}

        
            

              

            

            <img src={savings} alt="IndiqueAlguem"/>

           

            
            {/* <form className="caixa-form">                               
                                        
                    <select required id="prestador" name="select"  className="select-prestador" >
                        <option value=" " disabled selected>Prestador</option>
                        <option value="Advogado">Advogado</option>
                        <option value="Encanador">Encanador</option>
                        <option value="Pedreiro">Pedreiro</option>
                        <option value="Pintor">Pintor</option>
                    </select> 
                    
                    <select id="cidades" name="select" className="select-cidade">
                        <option value=" " disabled selected>Onde?</option>
                        <option value="Bayeux">Bayeux</option>
                        <option value="Cabedelo">Cabedelo</option>
                        <option value="Conde">Conde</option>
                        <option value="Joao Pessoa">João Pessoa</option>
                    </select>                                      

                    <input type="submit" value="Buscar >"/>    

                    <img src={savings} alt="IndiqueAlguem"/>
                
            </form> */}
            {/* <div className={styles.container_grid}>
            <div className={styles.container}>
                <div className={styles.informacoes}>       
                    <h4>texto 1</h4>
                    <p>Já pensou em trabalhar para si mesmo ou prestar algum serviço nas horas vagas?</p>
                </div>          
            </div>

            <div className={styles.container1}>
                <div className={styles.informacoes1}>       
                    <h4>texto 2</h4>
                    <p>Basta preencher um formulário e você se torna um prestador de serviço na Indique Alguém</p>
                </div>          
            </div>

            <div className={styles.container2}>
                <div className={styles.informacoes2}>       
                    <h4>texto 3</h4>
                    <p>Aqui você anuncia seu trabalho e muitas pessoas terão acesso</p>                
                </div>          
            </div>
            
            </div> */}
            

            
           
        </section>
        <Cards />
        <LinkButton to="/newusuario" text="Já tem uma conta?" />
            
        
        
        </div>
        
    )
}

export default Inicio


