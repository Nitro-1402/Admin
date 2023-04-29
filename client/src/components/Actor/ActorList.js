import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const ActorList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <DateField source='birth_date' />
        <EditButton basePath='/Actors' />
        <DeleteButton basePath='/Actors' />
      </Datagrid>
    </List>
  )
}

export default ActorList
