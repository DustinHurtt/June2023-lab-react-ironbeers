import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="home">

        <Link to='/beers'><h1>All Beers</h1></Link>
        <Link to='/random-beer'><h1>Random Beer</h1></Link>
        <Link to='/new-beer'><h1>Add Beer</h1></Link>
         

    </div>
  )
}

export default HomePage


