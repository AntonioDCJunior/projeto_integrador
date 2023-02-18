import { useState } from "react";
import styles from "./Cards.module.css"

function Cards() {

    const [cards] = useState([
        {
            title: '1',
            text: 'Já pensou em trabalhar para si mesmo ou prestar algum serviço nas horas vagas?'
        },
        {
            title: '2',
            text: 'Basta preencher um formulário e você se torna um prestador de serviço na Indique Alguém'
        },
        {
            title: '3',
            text: 'Aqui você anuncia seu trabalho e muitas pessoas terão acesso'
        },

    ])

    return (
        <div>
            <section>
                <div className={styles.container}>
                        {/* <h1>Card Responsivo</h1> */}
                        <div className={styles.cards} >
                            {
                                cards.map((card, i) => (
                                    <div key={i} className={styles.card} >
                                        <h3>{card.title}</h3>
                                        <p>{card.text}</p>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                </section>
            </div>
    )
}

export default Cards