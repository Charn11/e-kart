import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <Router />
    </Theme>
  </React.StrictMode>
);

