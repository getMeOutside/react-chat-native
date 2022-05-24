import {combineReducers, configureStore} from '@reduxjs/toolkit';
// import toolkitReducer from './toolkitReducer';
import toolkitSlice from './toolkitSlice';
import chatsSlice from './chatsSlice';
import groupSlice from './groupsSlice';
import exceedSlice from './exceedSlice';

const rootReducer = combineReducers({
  toolkit: toolkitSlice,
  chatsSlice: chatsSlice,
  groupSlice: groupSlice,
  exceedSlice: exceedSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
