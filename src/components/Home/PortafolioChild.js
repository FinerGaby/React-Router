import React from 'react';
import { Link } from "react-router-dom";


const PortafolioChild = ({textoPortafolio, descripcionPortafolio, imagenPortfolio, categoriaPortafolio, urlPath}) => {

    const divStyle = {
        backgroundImage: `url('img/${imagenPortfolio}.png')`
      };

    const categoriaCSS = categoriaPortafolio.map(c => {
        return <div className="categorias">{c}</div>;
      });

    return (
        <article style={divStyle} className="portafolioChild">
            <div className="informacion-portafolio">
                {categoriaCSS}
             <Link to={`${urlPath}${textoPortafolio}`}><h1>{textoPortafolio}</h1></Link>
            </div>
        </article>
    );
};

export default PortafolioChild;