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
        <TextField source='id' label="آیدی"/>
        {/* <ImageField source="photo"/> */}
        <TextField source='title' label="عنوان"/>
        <TextField multiline source='description' label="توضیحات"/>
        <DateField source='publish_date' label="تاریخ انتشار" />
        <EditButton basePath='/posts'/>
        <DeleteButton basePath='/posts' />
      </Datagrid>
    </List>
  )
}

export default PostList
