import {motion} from 'framer-motion';

// import image1 from '../../img/encanador1.png'
// import image2 from '../../img/encanador2.png'
// import image3 from '../../img/encanador3.png'

// const images = [image1, image2, image3]

function Carrossel () {
    return (
        <div>
            <div className={styles.home_h3}>
                
                <h3>Você presta algum serviço?</h3>
                
                <p>A Indique alguém é um serviço online criado para eletricistas, diaristas e profissionais de serviços, como você. Conheça clientes e mostre seu trabalho para o mundo sem gastar 1 real!</p>
            </div>

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

        </div>
    )
}

export default Carrossel
