import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const CategoryEdit = (props) => {
  return (
    <Edit title='Edit Actor' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <DateInput label='Published' source='publish_date' />
      </SimpleForm>
    </Edit>
  )
}

export default CategoryEdit    
