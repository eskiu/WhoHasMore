import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Flags from "./Flags";

function FlagContainer() {
    const [country, setCountry] = useState([])
    const [randomFlag, setRandomFlag] = useState([])


    const pedido = 'https://restcountries.com/v2/region/europe';
    useEffect(() => {
        fetch(pedido)
            .then((resp) => { return resp.json() })
            .then((respuesta) => {
                return setCountry(respuesta)
            })
    }, [])

    const twoRandomFlags = (country) => {
        setRandomFlag(country.sort(() => Math.random() - 0.5).slice(0, 2))
    }



    return (
        <>
            <Link to={`/`}><button>Back</button></Link>
            <button onClick={() => { twoRandomFlags(country) }}>reload</button>
            <div className="flag-game">
                {randomFlag.map((flag) => {
                    return <Flags key={flag.numericCode} flags={flag} />
                })}
            </div>
        </>
    )
}
export default FlagContainer