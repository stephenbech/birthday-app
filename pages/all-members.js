import React, {useEffect, useState} from 'react'
import Header from '../src/components/Header';
import styled from 'styled-components'
// import { Container } from '@mui/material';
function AllMembers() {
     const [data, setData] = useState([])
     useEffect(() => {
       fetch('https://to-do-cp-93bd8-default-rtdb.firebaseio.com/Celebrants.json').then(response => {return response.json();}).then((data) => {
          
          let array = Object.keys(data).map((key) =>  data[key]);
          setData(array)
          console.log(array)
       })
     }, [])
     

     
  return (
    <Container>
          <Header/>
          <Table>
               <thead>
                    <th>Title</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Date Of Birth</th>
                    <th>Gender</th>
               </thead>
          {
               data.map((item, index) => (
                     <tr>
                         <td>{item.title}</td>
                         <td>{item.firstName}</td>
                         <td>{item.lastName}</td>
                         <td>{item.date}</td>
                         <td>{item.gender}</td>
                     </tr>
               ))
          }
          </Table>
          
    </Container>
  )
}

export default AllMembers

const Container = styled.div`
     /* background: linear-gradient(to bottom, #004FF9, #9cecfb, #65c7f7); */
     height: calc(100vh - 80px);
`
const Table = styled.table`
     margin-top: 40px;
     padding: 10px 5px;
     /* overflow-x: auto; */
     /* width: auto; */
     /* background-color: white; */
     border-radius: 20px;

     th{
          font-size: 14px;
          color: white;
          padding-left: 0px auto;
          text-align: center !important;
     }

     tr{
          padding: 20px 15px;
          border-bottom: 1px solid #f9f9f9;
     }
     td{
          padding: 20px 15px;
          font-size: 12px;
          font-weight: 600;
          text-align: center;
     }
`