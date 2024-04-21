import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { AppThemeProvider } from './utils/app-theme-provider';
import GlobalStyles from './styles/global-styles';

// const store = createStore(function (state, action) {
//   const _state =
//     state == null
//       ? {
//           donate: 0,
//           message: '',
//         }
//       : state;

//   switch (action.type) {
//     case 'UPDATE_TOTAL_DONATE':
//       return Object.assign({}, _state, {
//         donate: _state.donate + action.amount,
//       });
//     case 'UPDATE_MESSAGE':
//       return Object.assign({}, _state, {
//         message: action.message,
//       });

//     default:
//       return _state;
//   }
// });

// render(
//   <Provider store={store}>
//     <AppThemeProvider>
//       <App />
//     </AppThemeProvider>
//   </Provider>,
//   document.getElementById('root'),
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider>
  <AppThemeProvider>
    <GlobalStyles />
    <App />
  </AppThemeProvider>,
  // </Provider>,
);
