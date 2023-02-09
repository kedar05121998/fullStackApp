import React, { useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,

  Tr,
  Th,
  Td,

  TableContainer,
  Heading,
} from '@chakra-ui/react'
import axios from 'axios';

const Appointment = () => {
  const [data, setData ] = useState([]);

  useEffect(()=>{
    axios.get(`https://backend-app-tjba.onrender.com/appointment`)
    .then(res => {
      setData(res.data)
    })
  }, [])
  return (
    <>
      <TableContainer>
        <Heading  color={"orange"}>Appointment Details</Heading>
  <Table variant='simple'>
    
    <Thead>
      <Tr  >
        <Th>Patient Name</Th>
        <Th>Patient  E-mail</Th>
        <Th>Patient Contact no.</Th>
        <Th>Appointment Date</Th>
        <Th>Appointment Time</Th>
       
        </Tr>
    </Thead>

    {data.map((item) => {
          return (
    <Tbody  key={item._id} >
      <Tr>
        <Td>{item.name}</Td>
        <Td>{item.email}</Td>
        <Td>{item.phone}</Td>
        <Td>{item.date}</Td>
        <Td >{item.appTime}</Td>
      

        

      </Tr>
    
     </Tbody>
    );
  })}
  </Table>
</TableContainer>
    
    </>
  )
}

export default Appointment