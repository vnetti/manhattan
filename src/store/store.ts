import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postersApi } from '~@store/api';
import { menuApi } from "~@store/api/menu.api.ts";

const reducers = combineReducers({
	[postersApi.reducerPath]: postersApi.reducer,
	[menuApi.reducerPath]: menuApi.reducer
});

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postersApi.middleware, menuApi.middleware)
});
