import React from "react";
import Card from "./Card.jsx";
/**
 * Todas las variables son en camelCase
 * const Componente = () => {
 * 		return (
 * 			<div>
 * 			</div>
 * 		);
 * };
 * 
 * PascalCase
 * create your first component
	js + XML -> X Markup Language
	js + html -> JSX
	Emmet Brown
	NO SE USA class
	SE USA className=""
 */



import babyRigo from "../../img/rigo-baby.jpg"


const Home = () => {
	const helloRigo = "Hello Rigo!";

	const usuario = {
		name: "Jose morrone",
		description: "algoalgoalgo"
	}
	const usuario2 = {
		name: "Alexis peña",
		description: "algoalgoalgo2"
	}

	// Todo lo que esta antes del return es JS PURO
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">{helloRigo}</h1>
			<Card name={usuario.name} description={usuario.description} />
			<Card name={usuario2.name} description={usuario2.description} />

		</div>
	);
};


export default Home;
