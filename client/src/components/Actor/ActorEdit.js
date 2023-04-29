import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const ActorEdit = (props) => {
  return (
    <Edit title='Edit Actor' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput multiline source='bio' />
        <DateInput label='publish_date' source='birth_date' />
      </SimpleForm>
    </Edit>
  )
}

export default ActorEdit    
