//react/redux
import React from 'react';
import ReactDOM from 'react-dom/client';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage' // установлен по умолчанию в localStorage для веба
import { persistStore, persistReducer } from 'redux-persist'
import {PersistGate} from "redux-persist/integration/react";
import reducer from "./redux/reducers/reducer";
//components
import App from './App';

const persistConfig = {
  key: 'selectedCities',
  storage,
}
//it's required for the data from Redux to be duplicated to the localStorage
const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, applyMiddleware(thunk))
let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
