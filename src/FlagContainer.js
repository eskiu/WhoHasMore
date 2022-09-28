import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { context } from "./context/FunctionContext"
import Spinner from './Spinner';
import Footer from './Footer';
import { Link } from 'react-router-dom'

function FlagContainer() {

    const [randomCountry, setRandomCountry] = useState([])
    const [twoCountry, setTwoCountry] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)
    const [isWrong, setIsWrong] = useState(false)
    const [counter, setCounter] = useState(0)
    const [maxCounter, setMaxCounter] = useState(0)

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
        if (twoCountry[0]?.population < value) {
            setIsCorrect(true)
            setCounter(counter + 1)
        } else {
            setIsWrong(true)
            isHighScore()
        }
    }

    const isLower = (value) => {
        if (twoCountry[0]?.population > value) {
            setIsCorrect(true)
            setCounter(counter + 1)
        } else {
            setIsWrong(true)
            isHighScore()
        }
    }

    const isHighScore = () => {
        if (counter > JSON.parse(localStorage?.getItem('maxCounter'))) {
            localStorage.setItem('maxCounter', counter)
            setMaxCounter(counter)
        }
    }

    return (
        twoCountry.length === 0 ? <Spinner /> : <>
            <div className="game-flag-container">
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
                    <div className="secondCountry" >
                        <div className="img-container">
                            <img src={twoCountry[1]?.flags.png} alt={twoCountry[1]?.translations.es} />
                        </div>
                        <div className="info-container">
                            <h2>{twoCountry[1]?.translations.es}</h2>
                            {isCorrect ? <p>Poblacion: {formatNumber(twoCountry[1]?.population)}</p> : <div className="btn-container">
                                <span>tiene</span>
                                <button className="btn2" onClick={() => { isHigher(twoCountry[1]?.population) }} disabled={isCorrect || isWrong} >Más población</button>
                                <button className="btn1" onClick={() => { isLower(twoCountry[1]?.population) }} disabled={isCorrect || isWrong}>Menos población</button>
                                <span>que {twoCountry[0]?.translations.es}</span>
                            </div>}
                        </div>
                    </div>
                </section>
                <div className='answer-container'>
                    {isCorrect ? <div className='correct-answer'>
                        <p>¡CORRECTO!</p>
                        <button onClick={() => deleteFirstElement()} >Siguiente</button></div> : ''}
                    {isWrong ?
                        <div className='wrong-answer'>
                            <div className="wrong-answer-txt">
                                <h1>¡BUEN INTENTO!</h1>
                                <p>{twoCountry[1]?.translations.es} tiene {formatNumber(twoCountry[1]?.population)} habitantes.
                                    <br />
                                    Tu puntuación fue de: {counter}
                                </p>
                            </div>
                            <div className="btns">
                                <button onClick={() => newGame()} >Reintentar</button>
                                <Link to={`/`}>Cambiar de región</Link>
                            </div>
                        </div>
                        : ""}
                </div>
                <Footer counter={counter} />
            </div>
        </>
    )
}

export default FlagContainer
