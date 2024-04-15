import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
<Navbar style={{backgroundColor:'black'}} className="card shadow  w-100">
<Container>
    <Navbar.Brand>
        <Link to={'/'} style={{textDecoration:'none',color:'orange'}}>
        <i style={{color:'orange'}} className="fa-solid fa-comments-dollar me-3"></i>
       Spend Smartly
        </Link>
    </Navbar.Brand>
    <div>
    <button  style={{border:'1px solid orange',color:'white',fontSize:'14px'}} className='btn '><Link style={{color:'white',textDecoration:'none'}} to={'/login'}>Sign In</Link></button>
    <button  style={{border:'1px solid orange',color:'white',fontSize:'14px'}} className='btn ms-4'> <Link style={{color:'white',textDecoration:'none'}} to={'/register'}>Sign Up</Link></button>
    </div>
</Container>
</Navbar>

    </div>
  )
}

export default Header