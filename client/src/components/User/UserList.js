import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' label="آیدی" />
        <TextField source='username' label="نام کاربری"/>
        <EmailField source='email' label="ایمیل"/>
        {/* <EditButton basePath='/users' /> */}
        <DeleteButton basePath='/users' />
      </Datagrid>
    </List>
  )
}

export default UserList
