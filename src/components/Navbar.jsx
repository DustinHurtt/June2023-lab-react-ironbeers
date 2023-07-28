import { Link } from "react-router-dom"
import homeIcon from '../assets/home-icon.png'

const Navbar = () => {
  return (
    <nav>
        <Link to='/'>
            <img src={homeIcon} alt="home"/>
        </Link>
    </nav>
  )
}

export default Navbar
