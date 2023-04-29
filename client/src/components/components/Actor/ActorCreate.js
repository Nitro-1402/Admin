import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'
import { ImageInput, ImageField } from 'react-admin';


const ActorCreate = (props) => {
  return (
    <Create title='Create a Actor' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />
        <ImageInput source="pictures" label="Related pictures">
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  )
}

export default ActorCreate


