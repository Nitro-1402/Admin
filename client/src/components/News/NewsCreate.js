import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'
import { ImageInput, ImageField } from 'react-admin';

const NewsCreate = (props) => {
  return (
    <Create title='Create a News' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput multiline source='description' />
        <DateInput label='Published' source='publish_date' />
        <ImageInput source="photo" label="Related pictures">
            <ImageField source="photo" />
        </ImageInput>
      </SimpleForm>
    </Create>
  )
}

export default NewsCreate
