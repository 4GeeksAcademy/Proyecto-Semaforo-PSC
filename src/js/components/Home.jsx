import React, { useEffect, useState, useRef } from "react";
import Semaforo from "./Semaforo";

const Home = () => {
    const [descripcion, setDescripcion] = useState("");
    const [titulo, setTitulo] = useState("EL SEMÁFORO");
    const semaforoRef = useRef(null);

    const descripcionDefault =
        "Es un dispositivo de control de tráfico que utiliza luces de colores (rojo, amarillo y verde) para regular el flujo de vehículos y peatones en intersecciones y otros puntos críticos de una vía. Su objetivo principal es asegurar la seguridad vial y el ordenamiento del tránsito al indicar cuándo es seguro avanzar, detenerse o tener precaución.";

    useEffect(() => {
        setDescripcion(descripcionDefault);

        const handleClickOutside = (event) => {
            if (
                semaforoRef.current &&
                !semaforoRef.current.contains(event.target)
            ) {
                setTitulo("EL SEMÁFORO");
                setDescripcion(descripcionDefault);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const manejarSeleccion = (color) => {
        if (color === "redLight") {
            setTitulo("LUZ ROJA");
            setDescripcion(
                "Luz roja: indica detención. Los vehículos que enfrenten esta señal deberán detenerse antes de la línea de detención y no deberán avanzar hasta que se encienda la luz verde. Los peatones que enfrenten esta señal no deberán bajar a la calzada ni cruzarla."
            );
        } else if (color === "yellowLight") {
            setTitulo("LUZ AMARILLA");
            setDescripcion(
                "La luz amarilla en un semáforo significa que pronto cambiará a rojo. Debes prepararte para detenerte, si es seguro, y reducir la velocidad. Si no puedes detenerte de forma segura, continúa con precaución."
            );
        } else if (color === "greenLight") {
            setTitulo("LUZ VERDE");
            setDescripcion(
                "Luz verde: indica paso. Los vehículos que enfrenten el semáforo pueden continuar o virar a la derecha o a la izquierda, salvo que se prohíba la maniobra mediante una señal. Los peatones que enfrenten la luz verde pueden cruzar la calzada por el paso correspondiente."
            );
        }
    };

    return (
        <div className="traffic">
            <div className="description">
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
            </div>
            <div ref={semaforoRef}>
                <Semaforo onColorSelect={manejarSeleccion} />
            </div>
        </div>
    );
};

export default Home;
