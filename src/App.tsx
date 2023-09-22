import {  Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './app.css';
import { HomesPage } from './pages';

const NotFound = () => {
  return (
    <div>Not Found</div>
  );
}

export const App = () => {
  return (
    <Router>
      <div className='app'>
          <Routes>
            <Route path="/homes" element={<HomesPage />} />
            <Route path="/" element={<HomesPage />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
      </div>
    </Router>
  );
}
