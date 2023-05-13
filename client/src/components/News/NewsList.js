import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {CreateButton} from 'react-admin';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  ImageField,
} from 'react-admin'

// function NewsList(){
//   const [items,setItems] = useState([])
//   const [filter, setFilter] = useState('');
//   const [page, setPage] = useState(1);
//   const perPage = 10;
//   // const { data, total, isLoading } = useGetList('movies/categories/', {
//   //     filter: { q: filter },
//   //     pagination: { page, perPage },
//   //     sort: { field: 'id', order: 'ASC' }
//   // });
//   useEffect(() => {
//       const payroll = async () => {
//           const url = 'https://nitroback.pythonanywhere.com/movies/news/';
//           const data = {
//           //   "amount": getamountdetail.amount,
//           //   "description": getamountdetail.description
//           }
//           // console.log(data);
//           const headers = {
//             'Content-Type': 'application/json',
//             'Authorization': "Bearer " + localStorage.getItem("accessToken")
//           }
//         axios.get(url,{
//             headers: headers
//           }).then(x=>{
//             console.log(x)
//             setItems(x.data.results)
//           }) }
//         payroll()
//   },[])
// //   if (isLoading) {
// //     return <div>Loading...</div>;
// // }
//     return (
//       <div>
//         <CreateButton label="ایجاد خبر جدید"/>
//         {items.map(item=>(
//           <div key={item.id}>{item.title} </div>
//         ))}
//       </div>
//   );
// }
// export default NewsList
const NewsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' label="آیدی" />
        {/* <ImageField source="photo" /> */}
        <TextField source='title' label="عنوان"/>
        <DateField source='publish_date' label="تاریخ انتشار"/>
        <EditButton basePath='/News'/>
        <DeleteButton basePath='/News' />
      </Datagrid>
    </List>
  )
}

export default NewsList
