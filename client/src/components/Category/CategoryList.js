import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const CategoryList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <DateField source='publish_date' />
        <EditButton basePath='/Actors' />
        <DeleteButton basePath='/Actors' />
      </Datagrid>
    </List>
  )
}

export default CategoryList
