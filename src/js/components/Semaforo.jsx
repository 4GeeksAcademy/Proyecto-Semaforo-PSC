import React, { useState } from "react";
import PropTypes from "prop-types";

const Semaforo = ({ onColorSelect }) => {
    const [selected, setSelected] = useState("");

    const handleClick = (color) => {
        setSelected(color);
        onColorSelect(color);
    };

    return (
        <div className="container">
            <div className={`redLight ${selected === "redLight" ? "redOn" : ""}`} onClick={() => handleClick("redLight")}></div>
            <div className={`yellowLight ${selected === "yellowLight" ? "yellowOn" : ""}`} onClick={() => handleClick("yellowLight")}></div>
            <div className={`greenLight ${selected === "greenLight" ? "greenOn" : ""}`} onClick={() => handleClick("greenLight")}></div>
        </div>
    );
};

Semaforo.propTypes = {
    onColorSelect: PropTypes.func.isRequired,
};

export default Semaforo;
