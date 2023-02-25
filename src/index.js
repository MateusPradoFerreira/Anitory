import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient'
import { App } from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
