import React from 'react';

const Portada = props => {
    return (
        <div className="portadaCSS">
        <div className="portadaText">{props.textoPortada}</div> <br />
        <span className="button">
        {props.buttonText}
        </span>
        </div>
    );
};

export default Portada;