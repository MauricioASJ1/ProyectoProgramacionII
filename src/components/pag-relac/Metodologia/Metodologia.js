import React, {useState} from 'react';
import './Metodologia.css';
import ImageSlider from '../../ImageSlider/imageSlider';
import { SliderData } from '../../ImageSlider/SliderData';



function Metodologia() {
    const [isShown, setIsShown] = useState(false);
    const [isShown_1, setIsShown_1] = useState(false);
    const [isShown_2, setIsShown_2] = useState(false);
    return (
        
        <div className="Container">
            <div className="Image-content-1">

                <div className="Section1-Container">
                    <h1>METODOLOGIA</h1>
                    <p>Conoce cómo trabajamos</p>
                </div>

                <div className="espacio-1"></div>
            </div>
            <div className="Image-content-2">
                <div className="Section2-Container">
                    <h1>MARCO DE TRABAJO SCRUM</h1>
                    <p>Para cada uno de los desarrollos hacemos uso de artefactos, eventos y roles de Scrum dentro de</p>
                    <p>nuestro equipo para constantemente brindar valor a nuestros clientes con herramientas visuales</p>
                    <p>que evidencian el progreso del sistema en todo momento.</p><br/>
                    <h1>Tiempo del Proyecto</h1>
                    <ImageSlider slides={SliderData} />
                </div>

                <div className="espacio-1"></div>
            </div>

            <div className="Image-content-3">
                <div className="Section3-Container">
                    {/*<h1>Roles</h1>
                        <div className="pos_1">
                        <img className="img_1" src="imagenes/t1.png" 
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                        />
                        {isShown && (
                            <div className="movimiento">
                                <p>Es el responsable de promover y asegurar que se</p>
                                <p>cumplan las buenas practicas y valores descritos en el</p>
                                <p>modelo Scrum</p>
                            </div>
                        )}
                        </div>
                        <div className="pos_2">
                        <img className="img_2" src="imagenes/t1.png" 
                        onMouseEnter={() => setIsShown_1(true)}
                        onMouseLeave={() => setIsShown_1(false)}
                        />
                        {isShown_1 && (
                            <div className="movimiento">
                                <p> hola_2</p>
                            </div>
                        )}
                        </div>
                        <div className="pos_3">
                        <img className="img_3" src="imagenes/t1.png" 
                        onMouseEnter={() => setIsShown_2(true)}
                        onMouseLeave={() => setIsShown_2(false)}
                        />
                        {isShown_2 && (
                            <div className="movimiento">
                                <p> hola_3</p>
                            </div>
                        )}
                        </div>
                        */}
                </div>

                <div className="espacio-3"></div>
            </div>
        </div>
    );
}

export default Metodologia