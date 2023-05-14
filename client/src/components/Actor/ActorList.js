import React from 'react'
import { useEffect, useState } from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  ShowButton,
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
      <div style={{textAlign:'right'}}>
        <div style={{margin:'60px 100px'}}>
          <div style={{margin:'30px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <span style={{}}> آیدی </span>
            <span style={{textAlign:'right', direction:'rtl'}}> عنوان </span>
            <span style={{marginRight:'480px',marginLeft:'165px'}}> تاریخ انتشار </span>
            <span> </span>
          </div>
        {items.map(item=>(
          <div 
          key={item.id}
          style={{margin:'30px',padding:'20px 0',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center', borderBottom:'1px solid #C1BFB5',borderTop:'1px solid #C1BFB5',textAlign:'right'}}
          >
            <span style={{}}>{item.id}</span>
            <span style={{textAlign:'right', direction:'rtl', width:'250px'}}>{item.name}</span>
            <span style={{marginRight:'250px'}}> 1402/02/23 </span>
            <span>
            {/* <EditButton/> */}
            <a href=''></a>
            <DeleteButton basePath='/movies/actors/'/>
            <ShowButton/>
            </span>
            </div>
        ))}
        </div>
      </div>
  );
}
export default ActorList