import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const NewsEdit = (props) => {
  return (
    <Edit title='Edit Actor' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}

export default NewsEdit    
