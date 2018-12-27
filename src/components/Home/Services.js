import React from 'react';
import ServicesChild from './ServicesChild';

const Services = ({consumirArray, ourServices}) => {
    return (
        <div className="services">
        <div className="ourservices">{ourServices}</div>
        {
                    consumirArray.map(c =>
                    <ServicesChild className="servicios"
                        key={c.textoServices}
                        texto={c.textoServices}
                        descripcion={c.descripcion}
                        imagen={c.imagenServices}
                    >
                    </ServicesChild>
                    )
                }
        </div>
    );
};

export default Services;