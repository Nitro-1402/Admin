import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput,ImageField,ImageInput } from 'react-admin'

const NewsEdit = (props) => {
  return (
    <Edit title='ویرایش خبر' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' label="آیدی" />
        <TextInput source='title' label="عنوان"/>
        <TextInput multiline source='description' label="توضیحات"/>
        <DateInput label='تاریخ انتشار' source='publish_date' />
        <ImageInput source="photo" label="عکس">
            <ImageField source="photo" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  )
}

export default NewsEdit    
