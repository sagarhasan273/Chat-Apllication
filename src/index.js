import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <App />
    </ChatContextProvider>
  </AuthContextProvider>,
);

reportWebVitals();
