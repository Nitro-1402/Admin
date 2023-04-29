import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  ImageField
} from 'react-admin'

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id'/>
        {/* <ImageField source="photo"/> */}
        <TextField source='title'/>
        <TextField multiline source='description' />
        <DateField source='publish_date' />
        <EditButton basePath='/posts'/>
        <DeleteButton basePath='/posts' />
      </Datagrid>
    </List>
  )
}

export default PostList
