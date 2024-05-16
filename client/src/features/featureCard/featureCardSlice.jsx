/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getProductFeature, getSurveyProductFeature } from '../../thunk';

const FeatureCardSlice = createSlice({
	name: 'FeatureCard',
	initialState: {
		loading: false,
		error: null,
		explanationOn: true,
		array: [],
		percentages: [],
	},
	reducers: {
		setExplanationOn: (state, { payload }) => {
			state.explanationOn = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductFeature.pending, (state) => {
				state.loading = true;
				state.error = null;
				state.array = [];
			})
			.addCase(getProductFeature.fulfilled, (state, action) => {
				state.loading = false;
				state.array = action.payload.percentages;
			})
			.addCase(getProductFeature.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.array = [];
			});
		builder
			.addCase(getSurveyProductFeature.pending, (state) => {
				state.loading = true;
				state.error = null;
				state.array = [];
				state.percentages = [];
			})
			.addCase(getSurveyProductFeature.fulfilled, (state, action) => {
				state.loading = false;
				state.array = action.payload.percentages;
				state.percentages = action.payload.percentages.filter(
					(percentage) => parseFloat(percentage) !== 0,
				);
			})
			.addCase(getSurveyProductFeature.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.array = [];
			});
	},
});

export const { setExplanationOn } = FeatureCardSlice.actions;

export default FeatureCardSlice.reducer;
