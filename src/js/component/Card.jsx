import React from "react";

/**
 * En react todas las etiquetas tienen que cerrar
 * <img>
 * <img />
 * 
 * props -> Properties
 * props {key1, key2, key3, key4 ............ }
 */
function Card(props) {
    console.log("PROPS:", props)
    return (
        <div className="card w-50 mx-auto custom-card">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    {props.description}
                </p>
            </div>
        </div>
    );
}

/**
 * Solo puedes exportar un componente de manera default por
 * Archivo
 */
export default Card;