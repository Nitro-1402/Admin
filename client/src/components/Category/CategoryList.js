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
        <TextField source='id' label="آیدی" />
        <TextField source='title' label="ژانر" />
        <DateField source='publish_date' label='تاریخ انتشار' />
        <EditButton basePath='/Actors' />
        <DeleteButton basePath='/Actors' />
      </Datagrid>
    </List>
  )
}

export default CategoryList
