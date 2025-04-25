import React, { useState } from "react";


const Semaforo = () => {

    const [selected, setSelected] = useState("")
    return (
        <div className="container">
            <div className={`redLight ${selected === "redLight" ? "redOn" : ""}`} onClick={() => setSelected("redLight")}></div>
            <div className={`yellowLight ${selected === "yellowLight" ? "yellowOn" : ""}`} onClick={() => setSelected("yellowLight")}></div>
            <div className={`greenLight ${selected === "greenLight" ? "greenOn" : ""}`} onClick={() => setSelected("greenLight")}></div>
        </div >
    )
};

export default Semaforo;