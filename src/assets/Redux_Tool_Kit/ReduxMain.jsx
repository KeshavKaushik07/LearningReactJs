import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import { Provider } from 'react-redux';
import Start from './Start';
import userStore from './userStore';
const ReduxMain = () => {

  

  const store = configureStore({
    reducer : userStore,
  });
  return (
    <>
        <Provider store={store}>
          <Start/>
        </Provider>
    </>
  )
}

export default ReduxMain