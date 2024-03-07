import './assets/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './pages/Main';
import Post from './pages/Post';
import List from './pages/List';
import PostId from './pages/PostId';
import PostIdMessage from './pages/PostIdMessage';
import PostIdEdit from './pages/PostIdEdit';
import MessageEdit from './pages/MessageEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="list">
            <Route index element={<List />} />
          </Route>
          <Route path="post">
            <Route index element={<Post />} />
            <Route path=":id">
              <Route index element={<PostId />} />
              <Route path="message" element={<PostIdMessage />} />
              <Route path="edit">
                <Route index element={<PostIdEdit />} />
                <Route path=":messageid" element={<MessageEdit />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
