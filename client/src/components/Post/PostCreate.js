import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'
import { ImageInput, ImageField } from 'react-admin';

const PostCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput multiline source='description' />
        <DateInput label='Published' source='publish_date' />
        <ImageInput source="poster" label="Related pictures">
            <ImageField source="photo" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  )
}

export default PostCreate





