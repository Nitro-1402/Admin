import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const CommentList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' label="آیدی"/>
        <TextField source='body' label="نظرات" />
        <DateField source='publish_date' label="تاریخ انتشار"/>
        {/* <EditButton basePath='/Comments' /> */}
        <DeleteButton basePath='/Comments' />
      </Datagrid>
    </List>
  )
}

export default CommentList
