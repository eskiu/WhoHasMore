import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { context } from "./context/FunctionContext"


function Start() {

    const { callAPI } = useContext(context)

    return (
        <>
            <section className='welcome-container'>
                <h1>BIENVENIDO</h1>
                <p>El juego consiste en elegir, entre dos países o islas, cuál tiene más población. <br /> Se podrá seleccionar diferentes regiones del mundo o todo el mundo tal cual
                    se muestra a continuación. <br />Tenga en cuenta que el juego se reinicia cada vez que se cambia de región, no así tú máxima puntuación. <br />¡Buena suerte!
                </p>
                <section className="selectRegion">
                    <h3>Elija su región</h3>
                    <div className="buttons">
                        <Link to={`/game/all`} onClick={() => { callAPI('all', '') }} >Todo el mundo</Link>
                        <Link to={`/game/americas`} onClick={() => { callAPI('region', 'americas') }} >América</Link>
                        <Link to={`/game/europe`} onClick={() => { callAPI('region', 'europe') }} >Europa</Link>
                        <Link to={`/game/africa`} onClick={() => { callAPI('region', 'africa') }} >Africa</Link>
                        <Link to={`/game/asia`} onClick={() => { callAPI('region', 'asia') }} >Asia</Link>
                        <Link to={`/game/oceania`} onClick={() => { callAPI('region', 'oceania') }} >Oceania</Link>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Start
