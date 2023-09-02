import { NavLink } from 'react-router-dom'
import './style.css'

const NavbarElements = () => {
  return (
    <div className='header'>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/AboutPage'>About</NavLink>
            <NavLink to='/ContactPage'>Contact</NavLink>
            <NavLink to='/VisitPage'>Visit</NavLink>
    
        </nav>
    </div>
  )
}

export default NavbarElements