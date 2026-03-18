import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import LayoutAR from './components/ar/layoutAR';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/weddingInvitation" element={<Layout />} />
        <Route path="/weddingInvitation/ar" element={<LayoutAR />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
