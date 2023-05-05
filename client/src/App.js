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
import farsiMessages from 'ra-language-farsi';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import {ShowGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
const messages = {
    'fa': farsiMessages,
};
document.getElementsByTagName("body")[0].setAttribute('dir', 'rtl');
const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'fa');

var httpClient = async (url,option)=>{
  const d = await fetch(url,{
    ...option,
  })
  var data = await d.json()
  console.log(data)
  return Promise.resolve({
    status: d.ok,
    headers: {},
    body: data,
    json: {},
  })
} 

function App() {
  return (
    <Admin dataProvider={restProvider('http://nitroback.pythonanywhere.com')} i18nProvider={i18nProvider}>
      
      <Resource
        name='Users'
        list={UserList}
        // create={UserCreate}
        edit={UserEdit}
      />
      <Resource 
        name='movies/movies/'
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
