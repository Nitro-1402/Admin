import React,{ useEffect, useState } from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  
} from 'react-admin'
import { Title, useGetList } from 'react-admin';
import {
    Card,
    TextField as MuiTextField,
    Button,
    Toolbar,
   Table,
   TableHead,
   TableRow,
   TableBody,
   TableCell,
} from '@mui/material';
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
  const [items,setItems] = useState([])
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 10;
  // const { data, total, isLoading } = useGetList('movies/categories/', {
  //     filter: { q: filter },
  //     pagination: { page, perPage },
  //     sort: { field: 'id', order: 'ASC' }
  // });
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
            console.log(x)
            setItems(x.data.results)
          }) }
        payroll()
  },[])
//   if (isLoading) {
//     return <div>Loading...</div>;
// }
    return (
      <div>
        {items.map(item=>(
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
  );
}

export default CategoryList

