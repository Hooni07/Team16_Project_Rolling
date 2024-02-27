import './assets/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
// import Post from './pages/Post';
import List from './pages/List';
import WritingForm from './components/WritingMessage/WritingForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="list">
            <Route index element={<List />} />
          </Route>
          {/* <Route path="post"> */}
          {/* <Route index element={<Post />} /> */}
          {/* <Route path=":id"> */}
          {/* <Route index element={} />
          <Route path='/edit' element={} /> */}
          <Route path="message" element={<WritingForm />} />
          {/* 임시로 해놓은 것. merge할때는 수정 */}
          {/* </Route> */}
          {/* </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
