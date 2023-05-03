import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const ActorEdit = (props) => {
  return (
    <Edit title='ویرایش بازیگران ...' {...props}>
      <SimpleForm>
        <TextInput source='name' label="نام بازیگر" />
        <TextInput multiline source='bio' label="توضیحات" />
        <DateInput source='birth_date' label='تاریخ تولد'/>
      </SimpleForm>
    </Edit>
  )
}

export default ActorEdit    
