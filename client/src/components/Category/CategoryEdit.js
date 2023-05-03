import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const CategoryEdit = (props) => {
  return (
    <Edit title='ویرایش دسته' {...props}>
      <SimpleForm>
        <TextInput source='title' label="ژانر"/>
        <DateInput label='تاریخ انتشار' source='publish_date' />
      </SimpleForm>
    </Edit>
  )
}

export default CategoryEdit    
