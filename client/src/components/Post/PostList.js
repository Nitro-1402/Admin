import React from 'react'
import { useEffect, useState } from 'react';

import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  ImageField
} from 'react-admin'

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' label="آیدی"/>
        {/* <ImageField source="photo"/> */}
        <TextField source='title' label="عنوان"/>
        <TextField multiline source='description' label="توضیحات"/>
        <DateField source='publish_date' label="تاریخ انتشار" />
        <EditButton basePath='/posts'/>
        <DeleteButton basePath='/posts' />
      </Datagrid>
    </List>
  )
}


// function PostList(){
//   const [items,setItems] = useState([])

//   useEffect(() => {
//       const payroll = async () => {
//           const url = 'https://nitroback.pythonanywhere.com/movies/categories/';
//           const data = {
//           //   "amount": getamountdetail.amount,
//           //   "description": getamountdetail.description
//           }
//           // console.log(data);
//           const headers = {
//             'Content-Type': 'application/json',
//             'Authorization': "Bearer " + localStorage.getItem("accessToken")
//           }
//           const response = await fetch(url, {
//             headers: headers
//           });
//           const d = await response.json()
//           setItems(d)
//           // window.location.replace(response.data.paymentUrl);
//         }
//         payroll()
//   },[])
  
//   return(
//     <div>
//       {
//       items.results? items.results.map((i)=>(
//            <CreatePostList key={i} image={i.poster} name={i.title}/>
//        )):undefined
//       }
//     </div>

    
//   )
// }



export default PostList
