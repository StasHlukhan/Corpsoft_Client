import ReactDOM from 'react-dom/client';
import App from './app/ui/AppRouter.tsx';
import { Provider } from 'react-redux';
import { setupStore } from './app/model/store.ts';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const persistor = persistStore(store);
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    </BrowserRouter>
  </Provider>,
);
