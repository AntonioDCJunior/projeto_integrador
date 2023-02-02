import React from "react"
import styles from "./Modal.module.css"
import Input from "../form/Input"
import LinkButton from "../layout/LinkButton"
import {Link} from 'react-router-dom'


const Modal = ({ id = "modal", onClose = () => {}, children}) => {

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    return (
        <div id="modal" className={styles.modal} onClick={handleOutsideClick}>
            <div className={styles.container}> 
                <button className={styles.close} onClick={onClose} />
                <div className={styles.content}>{children}</div>

                <h1>Bem Vindo ao Indique Alguém</h1>
                            
                          
                          <form className= {styles.form_modal}>
                              <label>
                                  <Input 
                                      type="text"
                                      text="E-mail"
                                      placeholder="E-mail"                    
                                  />
                                  <Input 
                                      type="text"
                                      text="Senha"
                                      placeholder="Senha"                    
                                  />
                                  <LinkButton text="Entrar" />
                              </label>

                                {/* <Link to="/new_senha">Esqueceu sua senha?</Link> */}
                                <div className={styles.criar_conta}>Ainda não tem uma conta? <LinkButton to="../newusuario" text="Clique aqui!" /></div>      
                          
                          </form>
                
                </div>
            </div>
    )
}


export default Modal