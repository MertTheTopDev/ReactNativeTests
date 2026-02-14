import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist';
//--- files
import User from "./reducers/user";
import Categories from "./reducers/Categories";
import Donations from "./reducers/Donations"
import { version } from "react";

const rootReducers = combineReducers({
  user: User,
  categories: Categories,
  donations: Donations
})

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1
}

const presistedReducer = persistReducer(configuration, rootReducers)

const store = configureStore({ 
  reducer: presistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    }).concat(logger);
  }
})

export default store; 
export const persistor = persistStore(store); 
