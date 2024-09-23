import { Routes, Route } from 'react-router-dom';
import Header from './components/MainPageComponents/Header.jsx';
import Footer from './components/MainPageComponents/Footer.jsx';
import Main from './components/MainPageComponents/Main.jsx';
import HirePage from './components/HirePageComponents/HirePage.jsx';
import './styles/MainPageStyles/app.css';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<><Header /><Main /><Footer /></>} />
        <Route
          path="/hirepage"
          element={<HirePage />} />
      </Routes>
    </>
  );
}

export default App;
