import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'
// import { Category_api } from "C:\Users\pc\Desktop\project\React-admin\Admin\client\API\Category_api.js"


const CategoryCreate = (props) => {
  return (
    <Create title='ایجاد دسته' {...props}>
      <SimpleForm>
        <TextInput source='title' label="ژانر "/>
        {/* <DateInput  source='publish_date' label="تاریخ انتشار" /> */}
      </SimpleForm>
    </Create>
  )
}

export default CategoryCreate
