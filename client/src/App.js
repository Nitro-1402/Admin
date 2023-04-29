import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/Post/PostList'
import PostCreate from './components/Post/PostCreate'
import PostEdit from './components/Post/PostEdit'
import ActorList from './components/Actor/ActorList'
import ActorCreate from './components/Actor/ActorCreate'
import ActorEdit from './components/Actor/ActorEdit'
import UserList from './components/User/UserList'
import UserCreate from './components/User/UserCreate'
import UserEdit from './components/User/UserEdit'
import CategoryList from './components/Category/CategoryList'
import CategoryCreate from './components/Category/CategoryCreate'
import CategoryEdit from './components/Category/CategoryEdit'
import NewsList from './components/News/NewsList'
import NewsCreate from './components/News/NewsCreate'
import NewsEdit from './components/News/NewsEdit'
import CommentList from './components/Comments/CommentList'


function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='users'
        list={UserList}
        // create={UserCreate}
        edit={UserEdit}
      />
      <Resource 
        name='Posts'
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name='actors'
        list={ActorList}
        create={ActorCreate}
        edit={ActorEdit}
      />
      <Resource
        name='categories'
        list={CategoryList}
        create={CategoryCreate}
        edit={CategoryEdit}
      />
      <Resource
        name='news'
        list={NewsList}
        create={NewsCreate}
        edit={NewsEdit}
      />
      <Resource
        name='comments'
        list={CommentList}
      />

    </Admin>
  )
}

export default App
