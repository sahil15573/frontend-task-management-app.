import { createRoot } from 'react-dom/client'; // Correct import for React 18
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx';

// Use createRoot to initialize the app
const root = createRoot(document.getElementById('root')); 
root.render(
  <BrowserRouter>
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
  </BrowserRouter>
);
