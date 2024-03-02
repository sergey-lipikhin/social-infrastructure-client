import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { ToastCustomContainer } from '@components/ToastCustomContainer';
import { store } from '@redux/store';
import { Root } from './Root';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: 0,
    },
  },
});

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ToastCustomContainer />

          <Root />
        </Router>
      </QueryClientProvider>
    </Provider>
  );
};
