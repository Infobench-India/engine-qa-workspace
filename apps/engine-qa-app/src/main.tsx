import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './app/app';
import ThemeProvider from './theme';
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';
import DashboardAppPage from './pages/DashboardAppPage';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <HelmetProvider>
        <ScrollToTop />
        <StyledChart />
        <Router />
      </HelmetProvider>
    </BrowserRouter>
  </ThemeProvider>
);
