import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
} from "react-admin";
import { ImageInput, ImageField } from "react-admin";
import { SelectArrayInput } from "react-admin";
import { FileInput, FileField } from "react-admin";
const PostCreate = (props) => {
  return (
    <Create title="ایجاد پست" {...props}>
      <SimpleForm>
        <TextInput source="title" label="عنوان" />
        {/* <SelectInput source='actors' label="بازیگران"/> */}

        <SelectArrayInput
          source="actors"
          label="بازیگران"
          choices={[
            { id: 1, name: "Admin" },
            { id: 2, name: "Editor" },
            { id: 3, name: "Moderator" },
            { id: 4, name: "Reviewer" },
          ]}
        />
        <SelectArrayInput
          source="category_set"
          label="ژانر"
          choices={[
            { id: 1, name: "Admin" },
            { id: 2, name: "Editor" },
            { id: 3, name: "Moderator" },
            { id: 4, name: "Reviewer" },
          ]}
        />

        <SelectInput
          source="director"
          label="کاگردان"
          choices={[
            { id: 1, name: "Tech" },
            { id: 2, name: "Lifestyle" },
            { id: 3, name: "People" },
          ]}
        />

        <ImageInput source="poster" accept="image/*">
        <ImageField source="src" title="title" />
        </ImageInput>

        <FileInput source="thumbnail">
            <FileField source="thumbnail" title="نمیدانم" />
        </FileInput>

        <TextInput multiline source="description" label="توضیحات" />

        <DateInput label="تاریخ انتشار" source="publish_date" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
