/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getProductFeature } from '../../../thunk';

const featureScoreDetailSlice = createSlice({
	name: 'featureScoreDetail',
	initialState: {
		loading: false,
		error: false,
		questionImportance: null,
		currentFeatureId: null,
	},

	reducers: {
		setCurrentFeatureId: (state, { payload }) => {
			state.currentFeatureId = payload;
		},
		// getFeatureScoreDetail: (state) => {
		// 	state.loading = true;
		// },
		// getFeatureScoreDetailSuccess: (state, { payload }) => {
		// 	state.loading = false;
		// 	state.featureScoreDetail = payload;
		// },
		// getFeatureScoreDetailFailure: (state, { payload }) => {
		// 	state.loading = false;
		// 	state.error = payload;
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductFeature.pending, (state) => {
				state.loading = true;
				state.error = false;
				state.questionImportance = null;
			})
			.addCase(getProductFeature.fulfilled, (state, action) => {
				state.loading = false;
				// Filter out features where the importance is not zero and parse them to float
				state.questionImportance = action.payload.percentages
					.filter((feature) => parseFloat(feature) !== 0)
					.map((feature) => parseFloat(feature));

				// if percentages all add up not to 1, then set the question importance as null again,
				// and set error
				const sum = state.questionImportance.reduce((a, b) => a + b, 0);
				console.log('sum', sum);
				const sumRounded = Math.round((sum * 100) / 100);
				if (sumRounded !== 1) {
					console.log('sumRounded', sumRounded);
					state.questionImportance = null;
					state.error = 'Question importance does not add up to 1';
				} else {
					state.error = false;
				}
			})

			.addCase(getProductFeature.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.questionImportance = null;
			});
	},

});

export const { setCurrentFeatureId } = featureScoreDetailSlice.actions;

export default featureScoreDetailSlice.reducer;
