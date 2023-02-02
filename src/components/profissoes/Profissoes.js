
import {Link} from 'react-router-dom'
import styles from "./Profissoes.module.css"
import Container from "../layout/Container"



function Profissoes () {
    return (   
        <>
                
                    
                    {/* <input type="text" id="site-search" text='Profissão' placeholder='Ex.: Pintor'/>
                    <button>Busca</button> */}
                <div className={styles.project_card}>
                    
                    <Container>
                        
                    <div>
                        <h4>Fábio Júnior</h4>
                        <p><span>Profissão: Pintor</span></p>
                        <p><span>Local: João Pessoa</span></p>
                        <p><span>Telefone: 83 9 9999-9999</span></p>
                        <div>
                            <p>Contratar</p>
                            <p>Mensagem</p>
                        </div>
                    </div>

                    <div>
                        <h4>Julio Cesar</h4>
                        <p><span>Profissão: Encanador</span></p>
                        <p><span>Local: Bayeux</span></p>
                        <p><span>Telefone: 83 9 9999-3333</span></p>
                        <div>
                            <p>Contratar</p>
                            <p>Mensagem</p>
                        </div>
                    </div>

                    <div>
                        <h4>Carlos Roberto</h4>
                        <p><span>Profissão: Carpinteiro</span></p>
                        <p><span>Local: Conde</span></p>
                        <p><span>Telefone: 83 9 9999-5555</span></p>
                        <div>
                            <p>Contratar</p>
                            <p>Mensagem</p>
                            
                        </div>
                    </div>
                    
                    <div>
                        <h4>Alex Vilar</h4>
                        <p><span>Profissão: Vigilante</span></p>
                        <p><span>Local: Cabedelo</span></p>
                        <p><span>Telefone: 83 9 9999-4444</span></p>
                        <div>
                            <p>Contratar</p>
                            <p>Mensagem</p>
                            
                        </div>

                    </div>
                    </Container>
                    
                      
                  </div>      
                  </> 
        
    )
}

export default Profissoes