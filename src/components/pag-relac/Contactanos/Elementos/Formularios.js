import styled, {css} from 'styled-components';

const colores = {
    borde: "#0075FF",
    error: "#F66060",
    exito: "#1ed12d"
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;

    ${props => props.valido === 'false' && css`
        color: ${colores.error}
    `}
`;

const GrupoInput = styled.div`
    position: relative;
    z-index:90;
`;

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition .3s ease all;
    border: 3px solid transparent;

    &: focus {
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.9);
    }

    ${props => props.valido === 'true' && css`
        border: 3px solid transparent;
    `}
    ${props => props.valido === 'false' && css`
        border: 3px solid ${colores.error} !important;
    `}
`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display: none;

    ${props => props.valido === 'true' && css`
        display: none;
    `}
    ${props => props.valido === 'false' && css`
        display: block;
    `}
`;

const IconoValidacion = styled.i`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;

    ${props => props.valido === 'false' && css`
        opacity: 1;
        color: ${colores.error};
    `}
    ${props => props.valido === 'true' && css`
        opacity: 1;
        color: ${colores.exito};
    `}
`;

const IconoValidacion_2 = styled.i`
    position: absolute;
    right: -462.25px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;

    ${props => props.valido === 'false' && css`
        opacity: 1;
        color: ${colores.error};
    `}
    ${props => props.valido === 'true' && css`
        opacity: 1;
        color: ${colores.exito};
    `}
`;

const ContenedorBotonCentrado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;
`;

const Boton = styled.input`
    margin-top: 20px;
    height: 45px;
    line-height: 45px;
    width: 30%;
    background: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;

    &:hover {
        box-shadow: 3px 0px 30px rgba(163,163,163, 1);
    }
`;

const MensajeExito = styled.p`
    margin-top: 10px;
    font-size: 14px;
    color: ${colores.exito};
`;

const MensajeError = styled.div`
    height: 45px;
    line-height: 45px;
    background: ${colores.error};
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;
    p {
        margin: 0;
    }

    b {
        margin-left: 10px;
    }
`;

const GrupoTextArea = styled.div`
    grid-column: span 2;
    position: relative;
    z-index:90;
`;

const TextArea = styled.textarea`
    resize: none;
    width: 205%;
    background: #fff;
    border-radius: 3px;
    height: 100px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition .3s ease all;
    border: 3px solid transparent;

    &: focus {
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.9);
    }

    ${props => props.valido === 'true' && css`
        border: 3px solid transparent;
    `}
    ${props => props.valido === 'false' && css`
        border: 3px solid ${colores.error} !important;
    `}
`;

export {
    Formulario, 
    Label, 
    GrupoInput, 
    Input, 
    LeyendaError,
    IconoValidacion, 
    ContenedorBotonCentrado, 
    Boton,
    MensajeExito, 
    MensajeError,
    GrupoTextArea,
    TextArea,
    IconoValidacion_2
};