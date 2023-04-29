import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const CategoryCreate = (props) => {
  return (
    <Create title='Create a Actor' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <DateInput label='Published' source='publish_date' />
      </SimpleForm>
    </Create>
  )
}

export default CategoryCreate
