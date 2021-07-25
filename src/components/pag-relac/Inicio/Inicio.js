import React from 'react';
import './Inicio.css';
function Inicio() {
  return (
  <div className="container">
      <div className="img-container-1">
        <div className="S1-Container">
          <h1>Crece de</h1>
          <h1>nuestra mano.</h1>
          <p>Desarrollo de software</p>
            <div className="Inicio-btns">
                  <a className="nav-links-mobile-2" href="/Contactanos">Contactenos</a>
            </div>
        </div>


        <div className="espacio">

        </div>
      </div>

      <div className="img-container-2">
      <div className="S2-Container">
        <p>&#123;Desarrolla tu plataforma&#125;</p>
        <h1>Construye tu página </h1>
        <h1>a tu gusto</h1>
        <p>¿Has pensado qué clase de plataforma requiere tu empresa?</p>
        <p>Te ayudamos con lo que necesites; una página web, una</p>
        <p>aplicación web o una aplicación móvil.</p><br/>
        <p>Mantén el control de lo que quieres, añade partes a tu gusto</p>
        <p>y a tu presupuesto. Con Dev-bms siempre podrás evolucionar.</p>
          <div className="Inicio-btns">
                <a className="nav-links-mobile-2" href="/Servicios">Conocozca más</a>
          </div>
          <div className="contenedor_imagen_gif"><img src="imagenes/creative.gif"/></div>
      </div>

      <div className="espacio">

      </div>

      </div>

      <div className="img-container-3">
      <div className="S3-Container">
        <p>&#123;Metodologías&#125;</p>
        <h1>Conoce cómo trabajamos</h1>
        <p>Estamos constantemente buscando nuevas y mejores</p>
        <p>formas de desarrollar productos de software funcional</p>
        <p>que cumplan con las expectativas de nuestros clientes.</p><br/>
        <p>Es por esto que empleamos marcos de trabajo ágiles</p>
        <p>para que puedas evidenciar en todo momento los</p>
        <p>avances del proyecto.</p>
          <div className="Inicio-btns">
                <a className="nav-links-mobile-2" href="/Metodología">Descubre</a>
          </div>
      </div>
      

        <div className="espacio-2">

        </div>
      
      </div>

      <div className="img-container-4">
      <div className="S4-Container">
        <p>¿Por qué deberías elegirnos?</p>
        <h1>Pensamos diferente</h1>
        <p>Utilizamos las más modernas tecnologías para que estés</p>
        <p>seguro de que tu empresa podrá competir en el mercado.</p>
        <p>Para nosotros lo más importante es la confianza y la</p><br/>
        <p>retroalimentación con nuestros clientes.</p>
          <div className="Inicio-btns">
                <a className="nav-links-mobile-2" href="/Nosotros">Conocenos</a>
          </div>
      </div>

          <div className="Contenedor_capsule">
          <img src="imagenes/capsule_1.png"/>
          <img src="imagenes/capsule_2.png"/>
          <img src="imagenes/capsule_1.png"/>
          <img src="imagenes/capsule_1.png"/>
          <img src="imagenes/capsule_1.png"/>
          <img src="imagenes/capsule_1.png"/>
          <img src="imagenes/capsule_1.png"/>
          <img src="imagenes/capsule_1.png"/>
          <img src="imagenes/capsule_1.png"/>
          </div>

        <div className="espacio-3">

        </div>
      </div>
  </div>
  );
}

export default Inicio;
