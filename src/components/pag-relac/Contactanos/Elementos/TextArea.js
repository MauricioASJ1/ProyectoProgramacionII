import React from 'react';
import {Label, GrupoTextArea, TextArea, LeyendaError, IconoValidacion_2} from "./Formularios";
const ComponenteTextArea = ({estado, cambiarEstado, label, placeholder, type, name, leyendaError, expresionRegular}) => {
    
    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value});
    }

    const validacion = () => {
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'})
            } else{
                cambiarEstado({...estado, valido: 'false'})
            }
        }
    }

    return(
        <div>
            <Label htmlFor="nombre" valido={estado.valido}>{label}</Label>
            <GrupoTextArea>
                <TextArea 
                type={type} 
                placeholder={placeholder} 
                id={name}
                value={estado.campo}
                onChange={onChange}
                onKeyUp={validacion}
                onBlur={validacion}
                valido={estado.valido}
                ></TextArea>
                <IconoValidacion_2 valido={estado.valido}><i className={estado.valido === 'true' ? "fas fa-check-circle" : "fas fa-times-circle"}/></IconoValidacion_2>
            </GrupoTextArea>
                <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
    );
}

export default ComponenteTextArea