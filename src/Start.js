import React from 'react'
import { Link } from "react-router-dom"

function Start({ isDark }) {
    return (
        <>
            <section className='welcome-container'>
                <h1>BIENVENIDO</h1>
                <Link to={`/game`}>
                    <button className={isDark ? "dark-mode-text dark-mode-elmnt" : "light-mode-elmnt light-mode-text"}>Start</button>
                </Link>
            </section>
        </>
    )
}

export default Start
