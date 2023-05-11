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
import axios from 'axios';

// const ActorList = (props) => {
//   return (
//     <List {...props}>
//       <Datagrid>
//         <TextField source='id' label="آیدی"/>
//         <TextField source='name' label="نام بازیگر"/>
//         <DateField source='birth_date' label='تاریخ تولد'/>
//         <EditButton basePath='/Actors' />
//         <DeleteButton basePath='/Actors' />
//       </Datagrid>
//     </List>
//   )
// }

// export default ActorList
function ActorList(){
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
          const url = 'https://nitroback.pythonanywhere.com/movies/actors/';
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
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
  );
}
export default ActorList