import React, {useState, useEffect} from 'react'
import Header from '../src/components/Header';
import styled from 'styled-components';
    
function TodaysCelebrants() {
     let celebrantArray = []
     const [celebrants, setCelebrants] = useState([])
     const [loading, setLoading] = useState(false)
     const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
     const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     
     function getCurrentCelebrants (){
          setLoading(true)
          
          fetch('https://to-do-cp-93bd8-default-rtdb.firebaseio.com/Celebrants.json').then(response => {return response.json();}).then((data) => {
     
               let array = Object.keys(data).map((key) =>  data[key]);
               array.map((item, index) => {
                    let todaysDate = new Date().toLocaleDateString()
                    let dateOfBirth = item.date;

                    let birthMonth = months[new Date(dateOfBirth).getMonth()];
                    let birthDay = weekday[new Date(dateOfBirth).getDay()];
                    let birthDate = new Date(dateOfBirth).getDate();

                    let currentMonth = months[new Date(todaysDate).getMonth()];
                    let currentDay = weekday[new Date(todaysDate).getDay()];
                    let currentDate = new Date(todaysDate).getDate();


                    let formartedBirthDate = formartDate(birthMonth, birthDate);
                    let formartedCurrentDate = formartDate(currentMonth, currentDate);
                    let result = checkMatchingDates(formartedBirthDate, formartedCurrentDate)
                    if(result === true){
                         celebrantArray.push(item)
                    }


               })
               setCelebrants(celebrantArray)
           })
           setLoading(false)
      
     }
     
     function formartDate (month, date){
          return month + " " + date;
     }

     function checkMatchingDates(birthDate, currentDate){
        return  birthDate === currentDate ? true : false;
     }
     useEffect(() => {
          getCurrentCelebrants();
     }, [])
     
     

     setInterval(getCurrentCelebrants, 86400000);
     
     if(loading){
          return (
               <h1>Loading</h1>
          )
     }
  return (
    <Container>
          <Header/>
          {
               celebrants.map((celebrant, index) => (
                    <h1 key={index}>Happy Birthday {celebrant.title} {celebrant.firstName} {celebrant.lastName}</h1>
               ))
          }
    </Container>
  )
}

export default TodaysCelebrants
const Container = styled.div`
     height: calc(100vh - 80px);
     background: linear-gradient(to bottom, #004FF9, #9cecfb, #65c7f7);

     color: #fff;
     
     h1{
          justify-content: center;
     }
`