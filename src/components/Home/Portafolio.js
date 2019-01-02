import React from 'react';
import PortafolioChild from './PortafolioChild';

const Portafolio = ({portafolioArray, portafolioTexto, urlPath}) => {

    //const obtenerCuatro = portafolioArray.filter( (item, index) => index <  3 ) 
    //console.log(obtenerCuatro)

    return (

      <div className="portafolio">
          <div className="textoportafolio">{portafolioTexto}</div>
            {
                portafolioArray.filter((item,index) => index < 4 ).map(item =>
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

export default Portafolio;

