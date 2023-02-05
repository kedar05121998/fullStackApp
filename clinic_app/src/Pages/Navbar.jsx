import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{"display":"flex","justifyContent":"space-around" }}  >
    <Button> <Link to="/" > Home </Link> </Button>
    <Button> <Link to="/form" > Book Appointment </Link> </Button>
    <Button> <Link to="/calender" > Calender </Link> </Button>
    <Button> <Link to="/appointment" > Appointment </Link> </Button>

    </div>
  )
}

export default Navbar