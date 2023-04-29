import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const CategoryCreate = (props) => {
  return (
    <Create title='Create a Actor' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default CategoryCreate
