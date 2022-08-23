import React, { createContext, useState } from 'react'
import { useEffect } from 'react'

export const context = createContext()
const { Provider } = context

function FunctionContext({ children }) {

    const [country, setCountry] = useState([])

    const callAPI = (region, country) => {
        setCountry([])
        fetch(`https://restcountries.com/v2/${region === undefined ? 'region' : region}/${country === undefined ? 'americas' : country}`)
            .then(resp => { return resp.json() })
            .then(respuesta => {
                return setCountry(respuesta)
            })
    }
    useEffect(() => callAPI(), [])


    const contextValue = {
        country,
        callAPI
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default FunctionContext