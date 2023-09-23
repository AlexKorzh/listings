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
    <Router basename='/listings'>
      <div className='app'>
          <Routes>
            <Route path="/" element={<HomesPage />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
      </div>
    </Router>
  );
}
