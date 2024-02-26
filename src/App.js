import './assets/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Post from './pages/Post';
import List from './pages/List';
import WritingMessage from './components/WritingMessage/WritingMessage';

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
              {/* <Route index element={} />
              <Route path='/edit' element={} /> */}
              <Route path="/message" element={<WritingMessage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
