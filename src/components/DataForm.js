import React, { useState, useEffect } from 'react'
import styles from '../../styles/components-style/DataForm.module.css'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 400,
   //   bgcolor: 'background.paper',
     border: '2px solid #ff0',
     boxShadow: 24,
     p: 4,
   };
   
function DataForm({onCreate, onCancel, onUpdate, data, update= false}) {
     const [title, setTitle] = useState("Pastor")
     const [name, setName] = useState("")
     // const [age, setAge] = useState(1)
     const [gender, setGender] = useState("Male")
     const [dateofbirth, setDateofbirth] =useState()

     // useEffect (() => {
     //      if (update) {
     //           setTitle(data.title)
     //           setName(data.name)
     //           setAge(data.age)
     //           setGender(data.gender)
     //      }else {
     //           setTitle("Brother")
     //           setName("")
     //           setAge(1)
     //           setGender("Male")
     //      }
     // }, [update, data] )

     const onSubmitCallBack = function (e) {
          e.preventDefault()
          if (update) {
               onUpdate({title, name, gender, dateofbirth})
          }else{
               onCreate({title, name, gender, dateofbirth})
          }

     }

     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     const [startDate, setStartDate] = useState(new Date());

    
  return (
     <>
             <div>
                    <Button onClick={handleOpen}>Open modal</Button>
                    <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                         timeout: 500,
                    }}
                    >
                    <Fade in={open}>
                         <Box sx={style}>
                         <Typography id="transition-modal-title" variant="h6" >
                         shit
                         </Typography>
                         <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                         <div className={styles.dataForm}>
                                   <form onSubmit={onSubmitCallBack}>
                                        <div>
                                             <label htmlFor='title' >Title</label>
                                             <select id='title' name='title' defaultValue={title} onChange={e => setTitle(e.target.value) }>
                                                  <option value="Brother" >Brother</option>
                                                  <option value="Sister" >Sister</option>
                                                  <option value="Pastor" >Pastor</option>
                                                  <option value="Deacon" >Deacon</option>
                                                  <option value="Deaconess" >Deaconess</option>
                                             </select>
                                        </div>
                                        <div>
                                             <label htmlFor='name'>Name</label>
                                             <input type="text" name="name" id="name" onChange={e => setName(e.target.value) } />
                                        </div>
                                        {/* <div>
                                             <label htmlFor='age'>Age</label>
                                             <input type="number" min="1" max="100" name="age" onChange={e => setAge(e.target.value) } />
                                        </div> */}
                                        <div>
                                             <label htmlFor='gender'  >Gender</label>
                                             <select id='gender' name='gender' defaultValue={gender} onChange={e => setGender(e.target.value) } >
                                                  <option value="Male" >Male</option>
                                                  <option value="Female" >Female</option>
                                             </select>
                                        </div>
                                        <div>
                                             <label htmlFor='date of birth'  >Date of Birth</label>
                                             <DatePicker id='dateofbirth' name='dateofbirth'  selected={startDate} onChange=
                                                  {(date) => {setStartDate(date); e => setDateofbirth(e.target.value)}} />
                                        </div>
                                        <div>
                                             <Button type='submit'>
                                                  Add 
                                             </Button>
                                        </div>
                                   </form>      
                              </div>
                         </Typography>
                         </Box>
                    </Fade>
                    </Modal>
               </div>
     </>
  )
}

export default DataForm

