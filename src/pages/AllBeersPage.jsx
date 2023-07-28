import React from 'react'
import { useContext, useState } from 'react'
import { BeerContext } from '../context/beer.context'
import { Link } from 'react-router-dom'

const AllBeersPage = () => {

    const [ searchTerm, setSearchTerm ] = useState('')

    const { beers } = useContext(BeerContext)

    let filtered = searchTerm ? beers.filter((beer) => beer.name.toLowerCase().includes(searchTerm.toLowerCase())) : beers

  return (
    <div >

    <label>Search</label>
    <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>

        {
            beers.length ? 

            <>
                {
                    filtered.map((beer) => {

                        return (
                        <Link to={`/beers/${beer._id}`}>
                            <div>

                                <img src={beer.image_url} alt='beer' />
                                <h2>{beer.name}</h2>
                                <p>Tagline: {beer.tagline}</p>
                                <p>Contributed by: {beer.contributed_by}</p>

                            </div>
                        </Link>

                        )
                    })
                }
            </>

            :

            <p>Loading...</p>
        }

    </div>
  )
}

export default AllBeersPage
