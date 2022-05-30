import {combineReducers, configureStore} from '@reduxjs/toolkit';
import themeSlice from './themeSlice';
import toolkitSlice from './toolkitSlice';
import chatsSlice from './chatsSlice';
import groupSlice from './groupsSlice';
import exceedSlice from './exceedSlice';

const rootReducer = combineReducers({
  toolkit: toolkitSlice,
  chatsSlice: chatsSlice,
  groupSlice: groupSlice,
  exceedSlice: exceedSlice,
  theme: themeSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
