import { FETCH_CUSTOMER } from './types';

const todoArray = {
servicesArray: [
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
        "galeriaPortafolio" : ["a1", "a1", "a1", "a1", "a1", "a1"],
        "textoPortafolio" : "Portada1",
        "descripcionPortafolio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "categoriaPortafolio" : ["MyBB", "Wordpress", "Drupal"],
    },
    {
        "imagenPortfolio" : "a1",
        "galeriaPortafolio" :  ["a1", "a1", "a1", "a1", "a1", "a1"],
        "textoPortafolio" : "Portada2",
        "descripcionPortafolio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "categoriaPortafolio" : ["MyBB", "Wordpress", "Drupal"],
    },
    {
        "imagenPortfolio" : "a1",
        "galeriaPortafolio" :  ["a1", "a1", "a1", "a1", "a1", "a1"],
        "textoPortafolio" : "Portada3",
        "descripcionPortafolio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "categoriaPortafolio" : ["MyBB", "Wordpress", "Drupal"],
    },
    {
        "imagenPortfolio" : "a1",
        "galeriaPortafolio" :  ["a1", "a1", "a1", "a1", "a1", "a1"],
        "textoPortafolio" : "Portada4",
        "descripcionPortafolio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "categoriaPortafolio" : ["MyBB", "Wordpress", "Drupal"],
    },
    {
        "imagenPortfolio" : "a1",
        "galeriaPortafolio" : ["a1", "a1", "a1", "a1", "a1", "a1"],
        "textoPortafolio" : "Portada5",
        "descripcionPortafolio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "categoriaPortafolio" : ["MyBB", "Wordpress", "Drupal"],
    },
    {
        "imagenPortfolio" : "a1",
        "galeriaPortafolio" :  ["a1", "a1", "a1", "a1", "a1", "a1"],
        "textoPortafolio" : "Portada6",
        "descripcionPortafolio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "categoriaPortafolio" : ["MyBB", "Wordpress", "Drupal"],
    },
    {
        "imagenPortfolio" : "a1",
        "galeriaPortafolio" :  ["a1", "a1", "a1", "a1", "a1", "a1"],
        "textoPortafolio" : "Portada7",
        "descripcionPortafolio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "categoriaPortafolio" : ["MyBB", "Wordpress", "Drupal"],
    },
    {
        "imagenPortfolio" : "a1",
        "galeriaPortafolio" : ["a1", "a1", "a1", "a1", "a1", "a1"],
        "textoPortafolio" : "Portada8",
        "descripcionPortafolio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "categoriaPortafolio" : ["MyBB", "Wordpress", "Drupal"],
    }
] 
};

export const fetchCustomer = () => {
return { type: FETCH_CUSTOMER, payload: todoArray}
};

