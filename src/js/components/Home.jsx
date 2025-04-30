import React from "react";
import Semaforo from "./Semaforo";


//create your first component
const Home = () => {
	return (
		<>
			<div className="traffic">
				<div className="description">
					<h1>EL SEMAFORO</h1>
					<p>Es un dispositivo de control de tráfico que utiliza luces de colores (rojo, amarillo y verde) para regular el flujo de vehículos y peatones en intersecciones y otros puntos críticos de una vía. Su objetivo principal es asegurar la seguridad vial y el ordenamiento del tránsito al indicar cuándo es seguro avanzar, detenerse o tener precaución.
					</p>
				</div>
				<Semaforo />
			</div>



		</>
	);
};

export default Home;