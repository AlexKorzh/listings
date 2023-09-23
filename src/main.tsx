import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { store } from "./store";
import { Provider } from 'react-redux';

// This code checks for the hash on load
if (window.location.hash) {
  const [path, search] = window.location.hash.slice(1).split('?');
  history.replaceState({}, '', `${path}${search}`);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);