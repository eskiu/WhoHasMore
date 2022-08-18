import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { context } from "./context/FunctionContext"
import Spinner from './Spinner';
import { Link } from 'react-router-dom'

function FlagContainer({ isDark }) {

    const [randomCountry, setRandomCountry] = useState([])
    const [twoCountry, setTwoCountry] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)
    const [isWrong, setIsWrong] = useState(false)
    const [counter, setCounter] = useState(0)

    const { country } = useContext(context)
    const copyCountry = [...country]

    useEffect(() => {
        const randomCountries = copyCountry.sort(() => (Math.random() > 0.5 ? 1 : -1))
        setRandomCountry(randomCountries)
    }, [country])

    useEffect(() => {
        const two = randomCountry.slice(0, 2)
        setTwoCountry(two)
    }, [randomCountry])

    const clear = () => {
        setIsCorrect(false)
        setIsWrong(false)
    }

    const newGame = () => {
        setCounter(0)
        setIsCorrect(false)
        setIsWrong(false)
        setRandomCountry(copyCountry.sort(() => (Math.random() > 0.5 ? 1 : -1)))
    }

    const deleteFirstElement = () => {
        randomCountry.shift()
        const two = randomCountry.slice(0, 2)
        setTwoCountry(two)
        clear()
    }

    function formatNumber(num) {
        return new Intl.NumberFormat().format(num)
    }

    const isHigher = (value) => {
        if (twoCountry[0]?.population > value) {
            setIsCorrect(true)
            setCounter(counter + 1)
        } else {
            setIsWrong(true)
        }
    }

    const isLower = (value) => {
        if (twoCountry[0]?.population < value) {
            setIsCorrect(true)
            setCounter(counter + 1)
        } else {
            setIsWrong(true)
        }
    }


    return (
        twoCountry.length === 0 ? <Spinner isDark={isDark} /> : <>
            <section className="countries-container">
                <div className="firstCountry">
                    <div className="img-container">
                        <img src={twoCountry[0]?.flags.png} alt={twoCountry[0]?.translations.es} />
                    </div>
                    <div className="info-container">
                        <h2>{twoCountry[0]?.translations.es}</h2>
                        <p>Poblacion: {formatNumber(twoCountry[0]?.population)}</p>
                    </div>
                </div>
                <div className="secondCountry">
                    <div className="img-container">
                        <img src={twoCountry[1]?.flags.png} alt={twoCountry[1]?.translations.es} />
                    </div>
                    <div className="info-container">
                        <h2>{twoCountry[1]?.translations.es}</h2>
                        <p>Poblacion: {isCorrect ? formatNumber(twoCountry[1]?.population) : "????"}</p>
                    </div>
                </div>
            </section>
            <section className='gameContainer'>
                <h1>¿<strong>{twoCountry[0]?.translations.es}</strong> tiene más o menos poblacion que <strong>{twoCountry[1]?.translations.es}</strong>?</h1>
                <div className="btn-container">
                    <button className="btn1" onClick={() => { isLower(twoCountry[1]?.population) }} disabled={isCorrect || isWrong}>MENOS POBLACIÓN</button>
                    <button className="btn2" onClick={() => { isHigher(twoCountry[1]?.population) }} disabled={isCorrect || isWrong}>MÁS POBLACIÓN</button>
                </div>
                {isCorrect ? <div className='correct-answer'> <p>¡CORRECTO!</p> <button onClick={() => deleteFirstElement()}>SIGUIENTE</button></div> : ''}
                {isWrong ? <div className='wrong-answer'><h1>¡BUEN INTENTO!</h1><p>{twoCountry[1]?.translations.es} tiene {formatNumber(twoCountry[1]?.population)} habitantes.<br /> Tu puntuación fue de: {counter}</p><button onClick={() => newGame()}>Reintentar</button><Link to={`/`} className={isDark ? "dark-mode-text dark-mode-elmnt" : "light-mode-text light-mode-elmnt"}>Cambiar de región</Link></div> : ""}
            </section>
        </>
    )
}

export default FlagContainer
