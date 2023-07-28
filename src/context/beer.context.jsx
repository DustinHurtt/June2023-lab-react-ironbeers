import { createContext, useState, useEffect } from "react";
import axios from "axios";

const BeerContext = createContext()

const BeerProvider = ({ children }) => {

    const [beers, setBeers] = useState([])

 useEffect(() => {

    axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
            console.log("All beers:", response.data)
            setBeers(response.data)
        })
        .catch((err) => {
            console.log(err)
        })

 }, [])   

    return (
        <BeerContext.Provider value={{ beers, setBeers }}>
            {children}
        </BeerContext.Provider>
    )
}

export { BeerContext, BeerProvider } 