import './assets/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './pages/Main';
import Post from './pages/Post';
import List from './pages/List';
import PostId from './pages/PostId';
import PostIdMessage from './pages/PostIdMessage';

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
              {/* <Route path='/edit' element={} /> */}
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
