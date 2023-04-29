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
        <TextField source='id' />
        <TextField source='body' />
        <DateField source='publishedAt' />
        {/* <EditButton basePath='/Comments' /> */}
        <DeleteButton basePath='/Comments' />
      </Datagrid>
    </List>
  )
}

export default CommentList
