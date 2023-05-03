import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'
import { ImageInput, ImageField } from 'react-admin';

const PostCreate = (props) => {
  return (
    <Create title='ایجاد پست' {...props}>
      <SimpleForm>
        <TextInput source='title' label="عنوان"/>
        <TextInput multiline source='description' label="توضیحات" />
        <DateInput label='تاریخ انتشار' source='publish_date' />
        <ImageInput source="poster" label="عکس">
            <ImageField source="photo" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  )
}

export default PostCreate





