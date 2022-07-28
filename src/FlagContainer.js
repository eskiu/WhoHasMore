import React from 'react'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";


function FlagContainer() {

    const { region } = useParams()
    console.log(region)

    const [country, setCountry] = useState([])

    useEffect(() => {
        fetch(`https://restcountries.com/v2/region/${region}`)
            .then((resp) => { return resp.json() })
            .then((respuesta) => {
                const twoFlags = [...respuesta]
                    .sort(() => (Math.random() > 0.5 ? 1 : -1))
                    .slice(0, 2)

                setCountry(twoFlags)
            })
    }, [region]);

    function formatNumber(num) {
        return new Intl.NumberFormat().format(num)
    }

    return (
        <>
            <div className="flag-game">
                {country
                    .map((flag) => {
                        return (
                            <section key={flag.numericCode} className="game-container">
                                <div className="img-container">
                                    <img src={flag.flags.png} alt="" />
                                </div>
                                <div className="info-container">
                                    <h2>{flag.translations.es}</h2>
                                    <p>Poblacion: {formatNumber(flag.population)}</p>
                                </div>
                            </section>
                        )
                    })}
            </div>
        </>
    )
}

export default FlagContainer
