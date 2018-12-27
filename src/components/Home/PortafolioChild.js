import React from 'react';

const PortafolioChild = ({textoPortafolio, descripcionPortafolio, imagenPortfolio, categoriaPortafolio}) => {

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
            <h1>{textoPortafolio}</h1>
            <h2>{descripcionPortafolio}</h2>
            </div>
        </article>
    );
};

export default PortafolioChild;