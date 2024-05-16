/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getProductRating } from '../../../thunk';

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
			.addCase(getProductRating.pending, (state) => {
				state.loading = true;
				state.error = null;
				state.data = {};
			})
			.addCase(getProductRating.fulfilled, (state, action) => {
				state.loading = false;
				const newData = action.payload.featureRatings.reduce((acc, feature) => {
					acc[feature.id] = feature.rating;
					return acc;
				}, {});
				state.data = newData;
			})
			.addCase(getProductRating.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.data = {};
			});
	},
});

export const {
	getFeatures,
	getFeaturesSuccess,
	getFeaturesFailure,
} = productFeaturesSlice.actions;

export default productFeaturesSlice.reducer;
