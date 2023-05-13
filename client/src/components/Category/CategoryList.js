import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

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
          const url = 'https://nitroback.pythonanywhere.com/movies/Categories/';
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
          </div>
          {items.map(item=>(
          <div style={{margin:'30px',padding:'20px 0',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center', borderBottom:'1px solid #C1BFB5',borderTop:'1px solid #C1BFB5',textAlign:'right'}}>
            <span style={{}}>{item.id}</span>
            <span style={{textAlign:'right', direction:'rtl', width:'250px'}}>{item.title}</span>
            <span style={{marginRight:'250px'}}> 1402/02/23 </span>
            {/* <span>
            <EditButton basePath='/posts'/>
            <DeleteButton basePath='/posts'/>
            <ShowButton/>
            </span> */}
          </div>
          ))}
        </div>
      </div>
  );
}
export default CategoryList


// const PostList = (props) => {
//   return (
//     <List {...props}>
//       <Datagrid>
//         <TextField source='id' label="آیدی"/>
//         {/* <ImageField source="photo"/> */}
//         <TextField source='title' label="عنوان"/>
//         <TextField multiline source='description' label="توضیحات"/>
//         <DateField source='publish_date' label="تاریخ انتشار" />
//         <EditButton basePath='/posts'/>
//         <DeleteButton basePath='/posts' />
//       </Datagrid>
//     </List>
//   )
// }