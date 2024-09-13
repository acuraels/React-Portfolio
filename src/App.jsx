import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import HirePage from './components/HirePage.jsx';
import './styles/app.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<><Header /><Main /><Footer /></>} />
        <Route path="/hire" element={<HirePage />} />
      </Routes>
    </>
  );
}

export default App;
