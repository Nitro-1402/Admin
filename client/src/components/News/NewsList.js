import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  ImageField,
} from 'react-admin'

const NewsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        {/* <ImageField source="photo" /> */}
        <TextField source='title' />
        <DateField source='publish_date' />
        <EditButton basePath='/Actors' />
        <DeleteButton basePath='/Actors' />
      </Datagrid>
    </List>
  )
}

export default NewsList
