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
        <TextField source='id' label="آیدی" />
        {/* <ImageField source="photo" /> */}
        <TextField source='title' label="عنوان"/>
        <DateField source='publish_date' label="تاریخ انتشار"/>
        <EditButton basePath='/Actors'/>
        <DeleteButton basePath='/Actors' />
      </Datagrid>
    </List>
  )
}

export default NewsList
