import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  DateField,
} from 'react-admin'

const MemberList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='first_name' />
        <EmailField source='last_name' />
        <TextField source='bio' />
        <DateField source='birth_date' />
        <EditButton basePath='/members' />
        <DeleteButton basePath='/members' />
      </Datagrid>
    </List>
  )
}

export default MemberList
