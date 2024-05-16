import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './product/productSlice';
import productFilterReducer from './filters/filterSlice';
import authReducer from './auth/authSlice';
import domainSlice from './domain';
import personaSlice from './persona';
import brandSlice from './brand/brandSlice';
import featureSlice from './feature';
import errorMessageSlice from './errorMessages/errorMessageSlice';
import featureCardSlice from './featureCard/featureCardSlice';
import codesignerSlice from './codesigner/index';
import codesignerSurveySlice from './codesignerSurvey/index';
import comparisonProductSlice from './comparisonProduct';
import share from './share';
// import personaCardSlice from './product/productPage/personaCardSlice';

const rootReducer = combineReducers({
	filters: productFilterReducer,
	auth: authReducer,
	product: productReducer,
	domain: domainSlice,
	persona: personaSlice,
	brand: brandSlice,
	feature: featureSlice,
	error: errorMessageSlice,
	featureCard: featureCardSlice,
	codesigner: codesignerSlice,
	codesignerSurvey: codesignerSurveySlice,
	comparison: comparisonProductSlice,
	share,
	// personaCard: personaCardSlice,
});

export default rootReducer;
