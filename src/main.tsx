import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Ensure light mode by default on startup
const initializeLightMode = () => {
  // Remove dark class immediately to ensure light mode
  document.documentElement.classList.remove('dark');
  
  // Only apply dark mode if explicitly saved as true
  const saved = localStorage.getItem('darkMode');
  if (saved && JSON.parse(saved) === true) {
    document.documentElement.classList.add('dark');
  }
};

// Initialize immediately before React renders
initializeLightMode();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
=======
=======
>>>>>>> ea369cdf3201543a89b097096747d2adc35b274c
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
<<<<<<< HEAD
>>>>>>> ea369cdf3201543a89b097096747d2adc35b274c
=======
>>>>>>> ea369cdf3201543a89b097096747d2adc35b274c
