import { useEffect, useState } from "react"
import axios from "axios"

const RandomBeerPage = () => {

    const [randomBeer, setRandomBeer] = useState(null)

    useEffect(() => {

        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((response) => {
                setRandomBeer(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])



  return (
    <div>
    
        {randomBeer ? 
        
            <>

                <img src={randomBeer.image_url} alt='randomBeer' />
                <h2>{randomBeer.name}</h2>
                <p>Tagline: {randomBeer.tagline}</p>
                <p>First Brewed: {randomBeer.first_brewed} </p>
                <p>Attenuation Level: {randomBeer.attenuation_level}</p>
                <p>Desription: {randomBeer.description}</p>
                <p>Contributed by: {randomBeer.contributed_by}</p>

            </>

            :

            <p>Loading...</p>
        
        }
    </div>
  )
}

export default RandomBeerPage
