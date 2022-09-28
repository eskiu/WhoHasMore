import React from "react"

function Footer({ counter }) {
    return (
        <div className="footer">
            <p>Puntuación: {counter}</p>
            <p>Puntuación máxima: {JSON.parse(localStorage?.getItem('maxCounter'))}</p>
        </div>
    )
}
export default Footer