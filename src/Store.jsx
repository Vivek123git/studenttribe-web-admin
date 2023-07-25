
import {configureStore} from '@reduxjs/toolkit'
import rootReducers from "./Reducer/Index"


const saveToLocalStorage = (data) =>{
    const state = JSON.stringify(data)
    localStorage.setItem('state',state)
}

const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      return undefined;
    }
  };

const persistedState = loadFromLocalStorage();

const store = configureStore({reducer:rootReducers,persistedState})

store.subscribe(()=>saveToLocalStorage(store.getState()))

export default store;