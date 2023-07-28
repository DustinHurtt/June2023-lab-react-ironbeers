import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BeerContext } from "../context/beer.context"

const AddBeerPage = () => {

    const [newBeer, setNewBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    const { beers, setBeers } = useContext(BeerContext)

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then((response) => {
                console.log("New Beer", response.data)
                navigate('/beers')
                setBeers([...beers, newBeer])
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setNewBeer({
                    name: '',
                    tagline: '',
                    description: '',
                    first_brewed: '',
                    brewers_tips: '',
                    attenuation_level: 0,
                    contributed_by: ''
                })
            })
    }


    const handleTextChange = (e) => {
        setNewBeer((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleNumberChange = (e) => {
        setNewBeer((prev) => ({...prev, [e.target.name]: Number(e.target.value)}))
    }


  return (
    <div>
        <h1>Add Beer</h1>

        <form onSubmit={handleSubmit}>
        
            <label>Name</label>
            <input name="name" type="text" onChange={handleTextChange} />

            <label>Tagline</label>
            <input name="tagline" type="text" onChange={handleTextChange} />

            <label>Description</label>
            <input name="description" type="text" onChange={handleTextChange}/>

            <label>First Brewed</label>
            <input name="first_brewed" type="text" onChange={handleTextChange}/>
            
            <label>Brewers Tips</label>
            <input name="brewers_tips" type="text" onChange={handleTextChange} />

            <label>Attenuation Level</label>
            <input name="attenuation_level" type="number" onChange={handleNumberChange} />

            <label>Contributed By</label>
            <input name="contributed_by" type="text" onChange={handleTextChange}/>

            <button type="submit">Add Beer</button>

        </form>
    </div>
  )
}

export default AddBeerPage

