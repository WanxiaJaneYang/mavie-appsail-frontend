/* eslint-disable no-param-reassign */
import { combineReducers } from '@reduxjs/toolkit';

import productDomains from './productDomains';
import productPersonas from './productPersonas';
import productFeatures from './productFeatures';
import featureScoreDetail from '../featureScoreDetail';
import ratingSlice from '../ratingSlice';

const productDataReducer = combineReducers({
	domain: productDomains,
	persona: productPersonas,
	features: productFeatures,
	featureDetail: featureScoreDetail,
	rating: ratingSlice,
});

export default productDataReducer;
