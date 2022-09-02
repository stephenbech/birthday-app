import React, { useEffect, useState } from 'react'
import DataForm from './DataForm'
import DataRow from './DataRow';


const rawData = [
     {
          title: "Brother",
          name: "Mark",
          gender: "Male",
     },
     {
          title: "Sister",
          name: "Jane",
          gender: "Female",
     },
     {
          title: "Pastor",
          name: "Philip",
          gender: "Male",
     }
]
function DataTable() {
     const [tableData, setTableData] = useState(rawData);
     const [editing, setEditing] = useState(false)
     const [editIndex, setEditIndex] = useState(false)

     const onSave = ({title, name, gender, dateofbirth}) =>{
          console.log("big Head")
          const newData = tableData.slice(0, tableData.length)
          newData.push({
               title, name, gender, dateofbirth
          })
          setTableData(newData)
     }

     const onDelete = ({index}) =>{
          const newData = tableData.slice(0, tableData.length)
          newData.splice(index, 1)
          setTableData(newData)
     }

     const onEdit = (index) => {
          setEditing(true)
          setEditIndex(index)
     }

     const onCancel = () => {
          setEditing(false)    
     }

     const onUpdate = ({title, name, gender, dateofbirth}) =>{
          const newData = tableData.slice(0, tableData.length)
          newData[editIndex] = {
               title, name, gender, dateofbirth
          }
          setTableData(newData)
          setEditing(false)
          setEditIndex(false)
     }

  return (
     <>
          <DataForm 
          onCreate={onSave} 
          onCancel={onCancel}
          onUpdate={onUpdate}
          update={editing}
          data={editing ? tableData[editIndex]: {}}
       />
      <table>
            <thead>
                 <th>Title</th>
                 <th>Name</th>
                 <th>Gender</th>
                 <th>Date of Birth</th>
                 <th>Actions</th>
            </thead>
            <tbody>
                 {tableData.map((rowData, index )=> (
                      <DataRow rowData={rowData} key={index} index={index} onDelete={onDelete} onEdit={onEdit} />
                 ))}
            </tbody>
       </table>
       
     </>
  )
}

export default DataTable