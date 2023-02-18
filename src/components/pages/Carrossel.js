import {motion} from 'framer-motion';
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import styles from "./Carrossel.module.css"
import savings from '../../img/buscando_prestador.png'

// import image1 from '../../img/encanador1.png'
// import image2 from '../../img/encanador2.png'
// import image3 from '../../img/encanador3.png'

// const images = [image1, image2, image3]

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  

function Carrossel () {



    return (
        <>
            {/* <h1 style={{ textAlign: "center" }}>Prestadores de serviços melhores avaliados</h1> */}
            <div className={styles.carrossel}>
                <Carousel breakPoints={breakPoints}>
                    <Item >One</Item>
                    <Item>Two</Item>
                    <Item>Three</Item>
                    <Item>Four</Item>
                    <Item>Five</Item>
                    <Item>Six</Item>
                    <Item>Seven</Item>
                    <Item>Eight</Item>
                </Carousel>
      </div>
                
        </>
    )
}

export default Carrossel
