import React, {useEffect, useState} from 'react'
import {  Button, Typography,  } from '@mui/material'
import styled from 'styled-components';
import Header from '../src/components/Header';
const titles = ['Pastor','Deacon', 'Deaconess', 'Sister', 'Brother']
const genders = ['Male', 'Female']

function RegisterMembers() {
     const [firstName, setFirstName] = useState('')
     const [lastName, setLasttName] = useState('')
     const [title, setTitle] = useState('')
     const [gender, setGender] = useState('')
     const [date, setDate] = useState('')
     function submitForm (e) {
          e.preventDefault();
          const member = {
               firstName: firstName,
               lastName: lastName,
               title: title,
               gender: gender,
               date: date
          }
          fetch('https://to-do-cp-93bd8-default-rtdb.firebaseio.com/Celebrants.json', {
               method: 'POST',
               body: JSON.stringify(member)
          }).then(response => {return response.json()}).then((data) => {
               console.log(data)
               setFirstName('');
               setLasttName('');
               setTitle('');
               setGender('');
               setDate('');
          })
     }
  return (
     
    <div>
          <Header/>
          <Container>
               <FormDiv >
                    <form onSubmit={submitForm}>
                         <select onChange={(e) => { setTitle(e.target.value)}} value = {title} required>
                              <option> select Title</option>
                              {
                                   titles.map((item, index) => (
                                        <option value={item} key = {index}>{item}</option>
                                   ))
                              }
                         </select>
                         
                         <input type='text' placeholder='First Name' value={firstName} onChange={(e) => { setFirstName(e.target.value)}} required />
                         <input type='text' placeholder='Last Name' value={lastName} onChange={(e) => { setLasttName(e.target.value)}} required />
                         <select onChange={(e) => { setGender(e.target.value)}} value = {gender} required >
                              <option>Select Gender</option>
                              {
                                   genders.map((item, index) => (
                                        <option value={item} key = {index}>{item}</option>
                                   ))
                              }
                         </select>
                         <input type='date' value={date} onChange={(e) => { setDate(e.target.value)}} required/>
                         <Btn type='submit' >
                              Submit
                         </Btn>
                    </form>
               </FormDiv>
          </Container>
    </div>
  )
}

export default RegisterMembers;

const Container = styled.div`
     height: calc(100vh - 80px);
     background: #f1f2f3; 
     /* background: -webkit-linear-gradient(to bottom, #004FF9, #FFF94C);  Chrome 10-25, Safari 5.1-6 */
     /* background: linear-gradient(to bottom, #004FF9, #9cecfb, #65c7f7); */
     position:  relative;
`

const FormDiv =styled.div`
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     max-width: 650px;
     border-radius: 9px;
     background: #f1f2f3;
     box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
     
     form{
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 40px;
          width: 650px;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          /* border: 1px solid #000; */
          input, select, option{
               width: 100%;
               padding: 15px 15px;
               border: none;
               border-radius: 4px;
               color: #000;
               background: rgba(25, 155, 255, 0.1);
               font-size: 19px;
               letter-spacing: 1px;

          }
     }

      
`

const Btn = styled.button`
    
    background-color: #004FF1;
    color: #ffffff;
    padding: 10px 20px;
    margin: 10px 15px;
    width: 180px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #01162c;
    display: flex;
    justify-content: center;
    align-items: center;


     &:hover {
    background-color: goldenrod;
    border: 1px solid goldenrod;
    transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s;  
}
`