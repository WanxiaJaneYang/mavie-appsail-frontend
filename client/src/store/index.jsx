import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features';
import errorHandlingMiddleware from './errorHandlingMiddleware';
import apiMiddleware from './apiMiddleware';

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
		.concat(errorHandlingMiddleware)
		.concat(apiMiddleware),
});

export default store;
