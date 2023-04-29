import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'
import { ImageInput, ImageField } from 'react-admin';


const ActorCreate = (props) => {
  return (
    <Create title='Create a Actor' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput multiline source='bio' />
        <DateInput label='Published' source='birth_date' />
        <ImageInput source="pictures" label="Related pictures">
          <ImageField source="photo" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  )
}

export default ActorCreate


