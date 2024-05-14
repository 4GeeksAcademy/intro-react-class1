//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

// Es el componente que vamos a renderizar
import Home from "./component/home.jsx";

//render your react application
// ! ReactDOM.render(componente, dondeVamosAInsertarlo) -> Genera nuestro dom virtual

// Entry Point

// Este es el elemento donde vamos a insertar toda la aplicacion
const appElement = document.querySelector("#app");

// <Home/> Es todo lo que renderizamos
ReactDOM.render(<Home />, appElement);
