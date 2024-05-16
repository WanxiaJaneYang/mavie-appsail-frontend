/* eslint-disable no-param-reassign */
import { combineReducers } from '@reduxjs/toolkit';
// import productDataReducer from './productData/productDataSlice';
import generalProduct from './generalProduct';
import ratingSlice from './ratingSlice';
import featureScoreDetail from './featureScoreDetail';

const comparisonProductSlice = combineReducers({
	productInfo: generalProduct,
	// productData: productDataReducer,
	rating: ratingSlice,
	featureDetail: featureScoreDetail,
});

export default comparisonProductSlice;
