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
        <TextField source='id' label="آیدی"/>
        <TextField source='name' label="نام بازیگر"/>
        <DateField source='birth_date' label='تاریخ تولد'/>
        <EditButton basePath='/Actors' />
        <DeleteButton basePath='/Actors' />
      </Datagrid>
    </List>
  )
}

export default ActorList
