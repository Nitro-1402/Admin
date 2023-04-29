import React from 'react'
import { Create, EmailField, SimpleForm, TextInput, useCreate } from 'react-admin'

const MemberCreate = (props) => {
  const postSave = (data) => {
    console.log(data)
    // create('posts', { data });
  };
  return (
    <Create title='Create a User 2' {...props}>
      <SimpleForm onSubmitCapture={postSave}>
        <TextInput source='first_name' /> 
        <TextInput source='last_name' /> 
      </SimpleForm>
    </Create>
  )
}

export default MemberCreate
