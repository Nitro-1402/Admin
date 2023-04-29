import React from 'react'
import { Create, SimpleForm, TextInput, useCreate } from 'react-admin'

// const UserCreate = (props) => {
//   const postSave = (data) => {
//     console.log(data)
//     // create('posts', { data });
//   };
//   return (
//     <Create title='Create a User 2'>
//       <SimpleForm onSubmitCapture={postSave}>
//         <TextInput source='name' /> 
//         <TextInput source='email' />
//       </SimpleForm>
//     </Create>
//   )
// }

const UserCreate = (props) => {
  return (
    <Create title='Create a User' {...props}>
      <SimpleForm>
        <TextInput source='name' /> 
        <TextInput source='email' />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate
