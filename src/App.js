import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainSection from './componenets/main/MainSection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
