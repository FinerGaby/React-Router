import React from 'react';
import PortafolioChild from './PortafolioChild';
import TituloPagina from '../About/TituloPagina';


const PortafolioPagina = ({portafolioArray, urlPath}) => {

    //const obtenerCuatro = portafolioArray.filter( (item, index) => index <  3 ) 
    //console.log(obtenerCuatro)

    return (
      <div>
      <TituloPagina tituloPagina='Portafolio' />
            {
                portafolioArray.map(item =>
                <PortafolioChild
                    urlPath={urlPath}
                    key={item.textoPortafolio}
                    textoPortafolio={item.textoPortafolio}
                    descripcionPortafolio={item.descripcionPortafolio}
                    imagenPortfolio={item.imagenPortfolio}
                    categoriaPortafolio={item.categoriaPortafolio}
                >
                </PortafolioChild>
                )
            }
            </div>
    );
};

export default PortafolioPagina;