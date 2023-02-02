import React from 'react';
import Modal from 'react-modal';
import Input from '../form/Input'
import LinkButton from '../layout/LinkButton';
import styles from './CadastroFinalizado.module.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgb(186, 225, 248)',
      // : 'rgb(40, 121, 168)',
    },
  };

function CadastroFinalizado () {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = 'rgb(40, 121, 168)';
      
    }
  
    function closeModal() {
      setIsOpen(false);
    }


    return (
        <div>
            <h1>Cadastro finalizado com sucesso!</h1> 

            <div>
                    <button className={styles.button_moda} onClick={openModal}>Finalizar</button>

                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Bem Vindo ao Indique Alguém</h2>
                        <button className={styles.button_modal_clos} onClick={closeModal}>X</button>
                        
                        <form className= {styles.form_moda}>
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
                                
                                
                        
                        </form>
                    </Modal>
                </div>
            </div>
    )
}

export default CadastroFinalizado