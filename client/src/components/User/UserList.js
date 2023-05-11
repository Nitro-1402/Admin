import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";

import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'react-admin'



function UserList(){
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
          const url = "http://nitroback.pythonanywhere.com/auth/users/";
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
          <span key={item.id}>{item.username}  {item.email} </span>
        ))}
      </div>
  );
}
export default UserList



// const UserList = (props) => {
//   return (
//     <List {...props}>
//       <Datagrid>
//         <TextField source='id' label="آیدی" />
//         <TextField source='username' label="نام کاربری"/>
//         <EmailField source='email' label="ایمیل"/>
//         {/* <EditButton basePath='/users' /> */}
//         <DeleteButton basePath='/users' />
//       </Datagrid>
//     </List>
//   )
// }

// export default UserList
