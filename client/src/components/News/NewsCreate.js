import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'
import { ImageInput, ImageField } from 'react-admin';

const NewsCreate = (props) => {
  return (
    <Create title='ایجاد خبر' {...props}>
      <SimpleForm>
        <TextInput source='title' label="عنوان"/>
        <TextInput multiline source='description' label="توضیحات" />
        <DateInput label='تاریخ انتشار' source='publish_date' />
        <ImageInput source="photo" label="عکس">
            <ImageField source="photo" />
        </ImageInput>
      </SimpleForm>
    </Create>
  )
}

export default NewsCreate
