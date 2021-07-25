import React, {useState} from 'react';
import {Formulario, ContenedorBotonCentrado, Boton,MensajeExito,MensajeError} from "./Elementos/Formularios";
import './Contactanos.css';
import Input from './Elementos/Input';
import TextArea from './Elementos/TextArea';

function Contactenos(){

    const [Nombre, cambiarNombre] = useState({campo: '', valido: null});
    const [correo, cambiarCorreo] = useState({campo: '', valido: null});
    const [descripcion, cambiardescripcion] = useState({campo: '', valido: null});
    const [FormularioValido, cambiarFormularioValido] = useState(null);
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        descripcion: /^[a-zA-Z0-9_.+À-ÿ\s]{1,300}/
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(Nombre.valido === 'true' && correo.valido === 'true'){
            cambiarFormularioValido(true);
            cambiarNombre({campo: '',valido: null});
            cambiarCorreo({campo: '',valido: null});
            cambiardescripcion({campo: '',valido: null});

            //BASE DATOS
        } else {
            cambiarFormularioValido(false);
        }
    }

    return (
        <div className="Fondo">
            <main>
                <div className="Titulo"><h1>CONTACTANOS!</h1></div>

                <Formulario action="" onSubmit={onSubmit}>
                    
                    <Input
                        estado={Nombre}
                        cambiarEstado={cambiarNombre}
                        label="Nombre"
                        placeholder="Nombre Apellido"
                        type="text"
                        name="nombre"
                        leyendaError="El usuario solo puede contener letras y espacios."
                        expresionRegular={expresiones.nombre}
                    />
                    <Input
                        estado={correo}
                        cambiarEstado={cambiarCorreo}
                        label="Correo"
                        placeholder="nombre_correo@correo.com"
                        type="email"
                        name="correo"
                        leyendaError="Correo Invalido."
                        expresionRegular={expresiones.correo}
                    />
                    <TextArea
                        estado={descripcion}
                        cambiarEstado={cambiardescripcion}
                        label="Descripcion"
                        placeholder="Hablenos sobre su proyecto..."
                        name="descripcion"
                        leyendaError="Descripcion Invalida."
                        expresionRegular={expresiones.descripcion}
                    />
                    {FormularioValido === false && <MensajeError>
                            <p>
                            <i className="fas fa-exclamation-triangle"></i>
                                <b>Error:</b>Por favor rellene el formulario correctamente.
                            </p>
                        </MensajeError>}
                    <ContenedorBotonCentrado>
                        <Boton type="submit" value="Enviar"/>
                        {FormularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
                    </ContenedorBotonCentrado>
                </Formulario>
            </main>
        </div>
    );
}

export default Contactenos;