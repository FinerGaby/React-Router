import React from 'react';

const ServicesChild = ({ texto, imagen, descripcion }) => {
    return (
       <div className="services-flex">
          <span className="iconcss">{imagen}</span>
          <h1>{texto}</h1>
          <h2>{descripcion}</h2>
        </div>
       
    );
};

export default ServicesChild;