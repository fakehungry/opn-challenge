import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { AppThemeProvider } from './utils/app-theme-provider';
import GlobalStyles from './styles/global-styles';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <AppThemeProvider>
      <GlobalStyles />
      <App />
    </AppThemeProvider>
  </Provider>,
);
