import React from 'react'
import StartFirebase from '../firebase'
import {ref, set, get, update, remove, child} from "firebase/database";
import { ref as sRef } from 'firebase/storage';
export class Crud extends React.Component{
     constructor(props){
          super(props);
          this.state = {
               db: 'https://to-do-cp-93bd8-default-rtdb.firebaseio.com',
               username: '',
               title: '',
               fullname: '',
               dob: '',
               gender: ''
          }
          this.interface = this.interface.bind(this);
     }
     componentDidMount(){
          this.setState({
               db: StartFirebase()
          });
     }

     render(){
          return(
               <>
                    <label>username</label>
                    <input type='text' id='userbox' value={this.state.username} onChange={e =>{this.setState({username: e.target.value});}} />
                    <label>title</label>
                    <select type="text" id="titlebox" value={this.state.title} 
                    onChange={e => {this.setState({title: e.target.value}); }}>
                         <option value="Brother" >Brother</option>
                         <option value="Sister" >Sister</option>
                         <option value="Pastor" >Pastor</option>
                         <option value="Deacon" >Deacon</option>
                         <option value="Deaconess" >Deaconess</option>
                    </select>
                    <br/><br/>
                    <label>Name</label>
                    <input type="text" id="namebox" value={this.state.fullname} 
                    onChange={e => {this.setState({fullname: e.target.value}); }} />
                    <br/><br/>
                    <label>Choose date of birth</label>
                    <input type='date' id='datebox' value={this.state.dob}
                    onChange={e => {this.setState({dob: e.target.value});}} />
                    <label>gender</label>
                    <select type="text" id="genderbox" value={this.state.gender} onChange={e => {this.setState({gender: e.target.value}); }}>
                         <option value="Male" >Male</option>
                         <option value="Female" >Female</option> 
                    </select>

                    <button id='addBtn' onClick={this.interface}>Add Data</button>
                    <button id='updateBtn' onClick={this.interface}>update Data</button>
                    <button id='deleteBtn' onClick={this.interface}>delete Data</button>
                    <button id='selectBtn' onClick={this.interface}>Get Data from DB</button>
               </>
          )
     }
     interface(event){
          const id = event.target.id;

          if(id=='addBtn'){
               this.insertData();
          }
          else if(id=='updateBtn'){
               // this.updateBtn();
          }
          else if(id=='selectBtn'){
               //this.deleteData();
          }
          else if(id=='selectBtn'){
               // this.selectData();
          }
     }

     getAllInputs(){
          return {
               username: this.state.username,
               title: this.state.title,
               name: this.state.fullname,
               dob: this.state.dob,
               gender: this.state.gender
          }
     }
     insertData(){
          const db = this.state.db;
          const data = this.getAllInputs();
          console.log(db.app)

          set(sRef(db.app._options.databaseURL, '/Celebrants.json'),
          {
               Title: data.title,
               Fullname: data.name,
               dateofbirth: data.dob,
               Gender: data.gender
          })
          .then(()=>{alert('data was added successfully')})
          .catch((error) => {alert('there was an error, details: '+error )});
     }
}