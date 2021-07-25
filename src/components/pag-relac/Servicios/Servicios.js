import React,{ Component} from 'react';
import './Servicios.css'
import ImageSlider2 from '../../ImageSlider/imageSlider2';
import { SliderData2 } from '../../ImageSlider/SliderData';
import Cubo from './cubo.js'
import {Icon} from './IconItems'
 class Serv extends Component{
     
    render(){
        return(
            <div>
                
              <div className="conteT"> 
              <div class="wrap">
              <div className="servicios">
                  <div className="contenido-titulo">
                  <div className="titu"><h1>Nuestros Servicios</h1></div>
                  <div className="sub-titu"><p>Conoce lo que te ofrecemos</p></div>
                  </div>
              </div>
                <div className="all">
                  <div className="button-prev">
                      <div className="left"></div>
                  </div>
                  <div className="contenidoS">
                    
                    <Cubo/> 
                    <Cubo/>
                    <Cubo/> <Cubo/> <Cubo/>
                    </div>
    
    <section class="cont">
    <div class="category-item" category="DISEÑO">    
    <div class="c-img" category="">
        <img src="https://bracedevelopers.com/static/media/ic_laptop_frente.c1bf186d.png" />
    </div>
    <div class="c-des" category=""><b>DISEÑO</b></div>
    </div>
    <div class="category-item" category="DESARROLLO">
    <div class="c-img" category="">
        <img src="https://bracedevelopers.com/static/media/ic_monitor_adelante.8ce7a66d.png" />
    </div>
    <div class="c-des" category=""><b>DESARROLLO</b></div> 
    </div>
    <div class="category-item" category="MARKETING">
    <div class="c-img" category="DESARROLLO">
        <img src="https://bracedevelopers.com/static/media/ic_celular_adelante.6f3ff7f3.png" />
    </div>
    <div class="c-des" category=""><b>MARKETING</b></div> 
    </div>   
    </section>  
                  <div className="contenidoS">
                  <Cubo/> 
                    <Cubo/>
                    <Cubo/> <Cubo/> <Cubo/>
                    </div>
                    <div className="button-prev">
                        <div className="right"></div>
                    </div>
    </div>                               
    </div>
                </div> 
                <div className="conte-2">
                    <div className="margen"></div>
                    <div className="texto">
                    <div className="tit">Infinitas posibilidades</div><br/><br/>
                    <div className="desc">Nosotros nos acomodamos a ti, a tu presupuesto y a tus necesidades. Contamos con un sistema de puntos para que incluyas lo que necesites para tu negocio.</div>
                    </div>
                    
                    <div className="conte-2-ref">
                    {Icon.map((item, index) =>{
                            return(
                                
                                <div key={index} className={item.class}>
                                    <div className="img-2"><img src={item.image}></img></div>
                                    <div className="des-2">{item.descripcion} </div>
                                   
                                    </div>
                               
                            )
                        })}
                        
                        
                    </div>
                    <div className="crece"> 
                        <div className="c-titulo">CRECE CUANDO QUIERAS</div>
                        <div className="c-sub-titulo">Puedes comenzar cuando lo desees, tu sitio web, una aplicación web, tú decides.</div>
                    </div>
                    <div className="container_slider"> 
                  <ImageSlider2 slides={SliderData2} />
                  </div>
                </div>
                
            </div>
        )
    }
  }
  export default Serv;