// import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
      <div>
          <Navbar className="bg-info">
        <Container>
          <Navbar.Brand  style={{color:'white'}}>
            <Link to={'/home'} style={{color:'white',textDecoration:'none'}}>
            Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header