import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import log from "../image/logo.png"
import lupa from "../image/lupa.png"
import usuario from "../image/usuario.png"
import shop from "../image/shop.png"
import coracao from "../image/coracao.png"
import backgroundChu from '../image/chutando.png';
import tes from '../image/teste.jpg';
import tutu from '../image/tu.jpg';
import cesta from '../image/cesta.webp';


export default function Work() {

    return (

        <div className="pagina">

           
                <div className='fundo1'>
                
                        <img className='logo' src= {log} />   
                
                    <div className='tutu'> 
                         
                        <div className='tata'>
                        <img className='pesquisa' src= {lupa} />
                        </div>
                        
                        <input className='bara'  id='pesquisa1' placeholder=' pesquisa' type='text'></input>

                    </div> 
            
                    <div className='perfil'> 

                     <div className='imgPerfil'>

                     <img className='usuario' src= {usuario} />

                     </div>
                     <div className='nomePerfil'>

                        <h1 className='rere'>
                        Faça seu login
                        </h1>

                     </div>

                    </div>
                    <div className='coracao1'> 
                    
                    <img className='coracao' src= {coracao} />

                    </div>

                    <div className='carrinho'>

                    <img className='shop' src= {shop} />

                    </div>

                </div>

           
        
        <div className='separar-rodape'>

         <h1 className='font-rodape'>esportes</h1>
         
         <h1 className='font-rodape'>equipamentos</h1>

         <h1 className='font-rodape'>acessórios</h1>

         <h1 className='font-rodape'>marcas</h1>

         <h1 className='font-rodape'>em alta</h1>

         <h1 className='font-rodape'>recomendado</h1>

         <h1 className='font-rodape'>favoritos</h1>

         <h1 className='font-rodape'>bicicleta </h1>

            <div className='fundo-outros'> 
                <h1 className='font-rodape'>outros</h1>
            </div>

        </div>

        <div className='linha' />

        <div className='layout'>
            <div className='te'  style={{ backgroundImage: `url(${tes})`  }}>
              <div className='secao-layout'>
                <h1 className='texto-pro'> Promoção De </h1>
                <h1 className='texto-prim'> Primavera </h1>
                <h1 className='texto-ver'> Ver+ </h1>
              </div>  
            </div>


            <div className='img-cesta'  style={{ backgroundImage: `url(${cesta})` }}>
                <h1 className='texto-basq'> Semana Do Basquete </h1>

                <div className='separar-basq'>               
                    <h1 className='texto-ate'> até </h1>
                    <h1 className='texto-pre'> 75% </h1>
                    <h1 className='texto-off'> off </h1>
                </div>
            </div>
        </div>
    
      <div className='layout-mvenda'>
        <h1 className='texto-pqbp'> Produtos que baixaram de preço </h1>
      </div>
    
    
    
    
    </div>  
    )
}