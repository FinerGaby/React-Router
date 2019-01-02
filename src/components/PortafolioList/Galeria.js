import React from 'react';

const Galeria = ({obtenerFiltrado}) => {

    const { galeriaPortafolio, textoPortafolio, descripcionPortafolio} = obtenerFiltrado;
    console.log(galeriaPortafolio)

    const categoriaCSS = galeriaPortafolio.map(c => {
        return <div className="galeriaCSS"><img src={(`/img/${c}.png`)} alt={`img/${c}.png`} /></div> ;
      });

    return (
        <div>
        <div className="textoPortafolio">
                <h1>{textoPortafolio}</h1>
                <h2>{descripcionPortafolio}</h2>
            </div>
            {categoriaCSS}
        </div>
    );
};

export default Galeria;