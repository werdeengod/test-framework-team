import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@/сontext/theme';

import App from './App.tsx';
import '@/styles/main.scss';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>,
);
