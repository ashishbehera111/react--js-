import { configureStore } from '@reduxjs/toolkit'




// configureStore.js


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = configureStore({
    reducer: persistedReducer
  })
  let persistor = persistStore(store)
export  { store, persistor }
