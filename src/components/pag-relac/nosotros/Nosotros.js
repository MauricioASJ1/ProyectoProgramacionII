import React from 'react';
import './Nosotros.css';
function Nos() {
  return (
  <div className="container">
    
      <div className="img-container-1N" align="center">
        <div className="S1-ContainerN">
          <h1>Sobre Nosotros</h1>
          <br/> <br/>
          <br/> <br/> <br/> <br/> <br/> 
            <div className="Inicio-btns">
                  <a className="nav-links-mobile-2" href="/Servicios">Contactenos</a>
            </div>
        </div>


        <div className="espacioN">

        </div>
      </div>

      <div className="img-container-2N">
      <div className="S2-ContainerN">
     <div className="container_2">
        <h1 >¿Quiénes somos? </h1>
        
        <p>Somos una empresa enfocada en desarrollar productos</p>
        <p>tecnológicos innovadores de alta calidad que ayuden a</p>
        <p>las personas y a empresas a potenciar su negocio través</p>
        <p>del uso de tecnologías de punta. Creemos plenamente</p>
        <p>que mantener una relación de retroalimentación y</p>
        <p>confianza con nuestros clientes es vital para</p>
        <p>el desarrollo de productos exitosos.</p>
        </div>
        <div className="img-1">
        <img src="imagenes/nosotros.jpg"></img>
        </div>
      </div>

      <div className="espacioN">

      </div>

      </div>

      <div className="img-container-3N">
      <div className="S3-ContainerN">
        <div className="l" ><h1>Conoce cómo trabajamos</h1></div>
        <div className="r"><ul>
          <li><i class="fas green fa-circle">          </i>Diseñamos soluciones tecnológicas de alta calidad
            capaces de competir con las tendencias del mercado.</li>
            <li><i class="fas green fa-circle">        </i>Evaluamos el panorama tecnológico constantemente para
            ofrecer soluciones innovadoras y efectivas.</li> 
            <li><i class="fas green fa-circle">        </i>Trabajamos de manera cercana con nuestros clientes para que
            el producto final sea totalmente fiel a sus expectativas..</li>
            <li><i class="fas green fa-circle">        </i>Realizamos productos capaces de responder al crecimiento
              del negocio a cualquier nivel de operación.</li>
            <li><i class="fas green fa-circle">        </i>Usamos las metodologías ágiles para poder gestionar los
                proyectos de forma ordenada, autónoma y eficaz.</li>
      </ul></div>
      </div>
        <div className="espacio-2N">

        </div>
      
      </div>

      <div className="img-container-4N">
      <div className="S4-ContainerN">
        
        <h1 class="green-text">Tecnologías</h1>
        <p>Puedes comenzar por donde desees, un sitio web, una</p>
        <p>aplicación web o una aplicación móvil, tú decides.</p>
        <br/>
        
          <div className="container-icon">
          <div className="icon-t"><img src="imagenes/logo_react.png"></img></div>
          <div className="icon-t"><img src="imagenes/logo_nodejs.png"></img></div>
          <div className="icon-t"><img src="imagenes/logo_redux.png"></img></div>
          <div className="icon-t"><img src="imagenes/logo_firebase.png"></img></div>
          
          <div className="icon-t"><img src="imagenes/logo_android.png"></img></div>
          <div className="icon-t"><img src="imagenes/logo_swift.png"></img></div>
          <div className="icon-t"><img src="imagenes/logo_reactnative.png"></img></div>
          <div className="icon-t"><img src="imagenes/logo_css.png"></img></div>
          <div className="icon-t"><img src="imagenes/logo_html.png"></img></div>
          <div className="icon-t"><img src="imagenes/logo_angular.png"></img></div>
          <div className="icon-t"><img src="imagenes/logo_python.png"></img></div>
         
          
          <div className="icon-t"><img src="imagenes/logo_js.png"></img></div>
          
          
          </div>
      </div>
        <div className="espacio-3N">

        </div>
      </div>
  </div>
  );
}

export default Nos;
