import React from 'react';
import PortafolioChild from './PortafolioChild';


const PortafolioPagina = ({portafolioArray, portafolioTexto}) => {

    //const obtenerCuatro = portafolioArray.filter( (item, index) => index <  3 ) 
    //console.log(obtenerCuatro)

    return (

      <div className="portafolio">
          <div className="textoportafolio">{portafolioTexto}</div>
            {
                portafolioArray.map(item =>
                <PortafolioChild
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