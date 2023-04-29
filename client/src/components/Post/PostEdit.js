import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput,ImageField,ImageInput } from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput multiline source='description' />
        <DateInput label='Published' source='publish_date' />
        <ImageInput source="photo" label="Related pictures">
            <ImageField source="photo" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit
