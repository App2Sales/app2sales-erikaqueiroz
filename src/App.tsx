import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AppRoot from './AppRoot';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <AppRoot />
      </PersistGate>
    </Provider>
  );
}

export default App;
