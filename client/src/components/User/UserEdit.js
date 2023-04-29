import React from 'react'
import { Edit, SimpleForm, TextInput,PasswordInput } from 'react-admin'

const UserEdit = (props) => {
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm>
        <TextInput source='username' />
        <PasswordInput source='password'/>
        <TextInput source='email' />
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit
