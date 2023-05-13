import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'
import { ImageInput, ImageField } from 'react-admin';


const ActorCreate = (props) => {
  return (
    <Create title='Create a Actor' {...props}>
      <SimpleForm>
        <TextInput source='name' label="نام بازیگر" />
        <TextInput multiline source='bio' label="توضیحات"/>
        <DateInput label='تاریخ تولد' source='birth_date' />
        <ImageInput source="pictures" label="عکس">
          <ImageField source="photo" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  )
}

export default ActorCreate


