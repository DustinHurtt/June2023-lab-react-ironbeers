import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { BeerContext } from '../context/beer.context'

const BeerDetailsPage = () => {

    const [beer, setBeer] = useState(null)

    const { beers } = useContext(BeerContext)

    const { beerId } = useParams()

    useEffect(() => {

        let thisBeer = beers.find((beer) => beer._id === beerId)
        setBeer(thisBeer)

    }, [beers])



  return (
    <div>
        {beer ? 
        
            <>

                <img src={beer.image_url} alt='beer' />
                <h2>{beer.name}</h2>
                <p>Tagline: {beer.tagline}</p>
                <p>First Brewed: {beer.first_brewed} </p>
                <p>Attenuation Level: {beer.attenuation_level}</p>
                <p>Desription: {beer.description}</p>
                <p>Contributed by: {beer.contributed_by}</p>

            </>

            :

            <p>Loading...</p>
        
        }
    </div>
  )
}

export default BeerDetailsPage
