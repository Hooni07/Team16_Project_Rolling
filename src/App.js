import './assets/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Post from './pages/Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
