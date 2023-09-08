import { NavLink } from 'react-router-dom'
import './style.css'

const NavbarElements = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <h1>Tech</h1>
      </div>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/AboutPage'>About</NavLink>
            <NavLink to='/ContactPage'>Contact</NavLink>
            <NavLink to='/VisitPage'>Visit</NavLink>
    
        </nav>
        <div className='login-signup'>
          <button className='login-modal-button'>Login</button>
          <button className='signup-button'>Sign up</button>
        </div>
    </div>
  )
}

export default NavbarElements