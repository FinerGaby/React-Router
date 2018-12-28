import React, { Component } from 'react';
import PortafolioPagina from '../components/Home/PortafolioPagina';

class CustomerPortafolio extends Component {
    render() {
        return (
            <React.Fragment>
            <PortafolioPagina 
                portafolioTexto={'Portafolio'}
                portafolioArray={this.props.portafolioArray} />
            </React.Fragment>
        );
    }
}


CustomerPortafolio.defaultProps = {
    consumirArray: [
        {
            "imagenServices" : "WebDesing",
            "textoServices" : "What web do you",
            "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            "imagenServices" : "LogoDesign",
            "textoServices" : "What Logo do you",
            "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            "imagenServices" : "PrintDesign",
            "textoServices" : "What PrintDesign do you",
            "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        }
    ],
    portafolioArray: [
        {
            "imagenPortfolio" : "a1",
            "textoPortafolio" : "Portada1",
            "descripcionPortafolio" : "Descripcion1",
            "categoriaPortafolio" : ["MyBB", "Wordpress", "Drupal"],
        },
        {
            "imagenPortfolio" : "a1",
            "textoPortafolio" : "Portada2",
            "descripcionPortafolio" : "Descripcion1",
            "categoriaPortafolio" : ["MyBB", "Wordpress", "Drupal"],
        },
        {
            "imagenPortfolio" : "a1",
            "textoPortafolio" : "Portada3",
            "descripcionPortafolio" : "Descripcion1",
            "categoriaPortafolio" : ["MyBB", "Wordpress", "Drupal"],
        },
        {
            "imagenPortfolio" : "a1",
            "textoPortafolio" : "Portada4",
            "descripcionPortafolio" : "Descripcion1",
            "categoriaPortafolio" : ["MyBB", "Wordpress", "Drupal"],
        },
        {
            "imagenPortfolio" : "a1",
            "textoPortafolio" : "Portada5",
            "descripcionPortafolio" : "Descripcion1",
            "categoriaPortafolio" : ["MyBB", "Wordpress", "Drupal"],
        },
        {
            "imagenPortfolio" : "a1",
            "textoPortafolio" : "Portada6",
            "descripcionPortafolio" : "Descripcion1",
            "categoriaPortafolio" : ["MyBB", "Wordpress", "Drupal"],
        },
        {
            "imagenPortfolio" : "a1",
            "textoPortafolio" : "Portada7",
            "descripcionPortafolio" : "Descripcion1",
            "categoriaPortafolio" : ["MyBB", "Wordpress", "Drupal"],
        },
        {
            "imagenPortfolio" : "a1",
            "textoPortafolio" : "Portada8",
            "descripcionPortafolio" : "Descripcion1",
            "categoriaPortafolio" : ["MyBB", "Wordpress", "Drupal"],
        }
    ]
}

export default CustomerPortafolio;