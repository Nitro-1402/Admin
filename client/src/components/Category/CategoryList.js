import React from 'react'
import { useEffect, useState } from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  
} from 'react-admin'
import axios from 'axios'
function CreateCategoryList(props){
console.log(props)
  return (
      <Datagrid>
        {/* <TextField source='id' label="آیدی" /> */}
        <TextField source='title' label="ژانر" />
        {/* <DateField source='publish_date' label='تاریخ انتشار' /> */}
        <EditButton basePath='/categories' />
        <DeleteButton basePath='/categories' />
      </Datagrid>

  )
}

function CategoryList(){
  const [items,setItems] = useState()

  useEffect(() => {
      const payroll = async () => {
          const url = 'https://nitroback.pythonanywhere.com/movies/categories/';
          const data = {
          //   "amount": getamountdetail.amount,
          //   "description": getamountdetail.description
          }
          // console.log(data);
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem("accessToken")
          }
        axios.get(url,{
            headers: headers
          }).then(x=>{
            setItems(x.data.results)
          }) }
        payroll()
  },[])
  
  return(
    <div>
      <List
    basePath={"/movies/categories/"}
    resource={""}
    
    >
      <Datagrid>
      
      {
      items? items.map((i)=>(
           <CreateCategoryList key={i.id} title={i.title}/>
       )):undefined
      }
      </Datagrid>
      </List>
    </div>

    
  )
}

export default CategoryList

