import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import { SearchProvider, AppProvider } from '~/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <AppProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </AppProvider>
    </GlobalStyles>
  </React.StrictMode>,
);
<script src="https://kit.fontawesome.com/4a0aebdf59.js" crossorigin="anonymous"></script>;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
