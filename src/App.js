import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import LayoutAR from './components/ar/layoutAR';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/weddingInvitation" element={<Layout />} />
        <Route path="/weddingInvitation/ar" element={<LayoutAR />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
