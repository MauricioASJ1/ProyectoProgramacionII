import React from 'react';
import {Label, GrupoInput, Input, LeyendaError, IconoValidacion} from "./Formularios";
const ComponenteInput = ({estado, cambiarEstado, label, placeholder, type, name, leyendaError, expresionRegular}) => {
    
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
            <GrupoInput>
                <Input 
                type={type} 
                placeholder={placeholder} 
                id={name}
                value={estado.campo}
                onChange={onChange}
                onKeyUp={validacion}
                onBlur={validacion}
                valido={estado.valido}
                ></Input>
                <IconoValidacion valido={estado.valido}><i className={estado.valido === 'true' ? "fas fa-check-circle" : "fas fa-times-circle"}/></IconoValidacion>
            </GrupoInput>
                <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
    );
}

export default ComponenteInput