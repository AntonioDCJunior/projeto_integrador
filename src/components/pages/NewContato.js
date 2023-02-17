import styles from './NewContato.module.css'
import Contato from './Contato'
import Carrossel from './Carrossel'


function NewContato () {
    return (
        <div className={styles.newcontato_container}>
            <h1>Entre em contato conosco</h1>
            <Contato />
            <Carrossel />
            
            
        </div>

    )
}

export default NewContato
