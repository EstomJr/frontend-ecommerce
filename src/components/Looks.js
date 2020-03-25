import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import api from '../services/api'
import vestidoLindo from '../components/vestido-lindo.jpg'
import './Looks.css' 

function Looks(){
 async function getLook(){
   const reponse = await api.request({
      url: '/look', method: "GET",
  })
  }
  getLook()

       
        return (
            <Carousel>
                <div>
                    <h1>Produtos da Loja</h1>
                    <img src={vestidoLindo} alt="imagem1" />
                    <p className="legend"></p>
                </div>
                <div>
                <h1>Produtos da Loja</h1>
                    <img src={vestidoLindo} alt="imagem2" />
                    <p className="legend"></p>
                </div>
                <div>
                <h1>Produtos da Loja</h1>
                    <img src={vestidoLindo} alt="imagem3" />
                    <p className="legend"></p>
                    
                </div>
            </Carousel>
        );
}

export default Looks;
 
