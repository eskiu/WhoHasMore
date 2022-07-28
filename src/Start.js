import React from 'react'
import { Link } from "react-router-dom"

function Start({ isDark }) {
    return (
        <>
            <section className='welcome-container'>
                <h1>BIENVENIDO</h1>
                <section className="selectRegion">
                    <h3>Elija su región</h3>
                    <div className="buttons">
                        <Link to={`/game/americas`}>
                            <button className={isDark ? "dark-mode-text dark-mode-elmnt" : "light-mode-elmnt light-mode-text"}>América</button>
                        </Link>
                        <Link to={`/game/europe`}>
                            <button className={isDark ? "dark-mode-text dark-mode-elmnt" : "light-mode-elmnt light-mode-text"}>Europa</button>
                        </Link>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Start
