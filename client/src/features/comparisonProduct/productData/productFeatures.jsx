/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getSurveyProductRating } from '../../../thunk';

const productFeaturesSlice = createSlice({
	name: 'productFeatures',
	initialState: {
		loading: false,
		error: null,
		data: {},
	},
	reducers: {
	},

	extraReducers: (builder) => {
		builder
			.addCase(getSurveyProductRating.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getSurveyProductRating.fulfilled, (state, action) => {
				state.loading = false;
				const newData = action.payload.featureRatings.reduce((acc, feature) => {
					acc[feature.id] = feature.rating;
					return acc;
				}, {});
				state.data = newData;
			})
			.addCase(getSurveyProductRating.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const {
	getFeatures,
	getFeaturesSuccess,
	getFeaturesFailure,
} = productFeaturesSlice.actions;

export default productFeaturesSlice.reducer;
