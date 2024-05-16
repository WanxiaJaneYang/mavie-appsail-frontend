/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getSurveyProductRating } from '../../thunk';

const ratingSlice = createSlice({
	name: 'rating',
	initialState: {
		loading: true,
		error: null,
		data: {
			1: {
				overallRating: 0,
				expertOpinion: '',
				domainRatings: {
					1: {
						rating: 0,
						expertOpinion: '',
					},
					2: {
						rating: 0,
						expertOpinion: '',
					},
					3: {
						rating: 0,
						expertOpinion: '',
					},
					4: {
						rating: 0,
						expertOpinion: '',
					},
					5: {
						rating: 0,
						expertOpinion: '',
					},
				},
				featureRatings: {
					1: 0,
					2: 0,
					3: 0,
					4: 0,
					5: 0,
				},
			},
		},
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
				const collectedData = {};
				for (const productRating of action.payload) {
					const ratingObj = {};
					ratingObj.overallRating = productRating.overallRating;
					ratingObj.expertOpinion = productRating.expertOpinion;
					const domainRatings = {};
					if (productRating.domainRatings && productRating.domainRatings?.length > 0) {
						for (const domain of productRating.domainRatings) {
							domainRatings[domain.id] = {
								rating: domain.rating,
								expertOpinion: domain.expertOpinion,
							};
						}
					}
					const featureRatings = {};
					if (productRating.featureRatings && productRating.featureRatings?.length > 0) {
						for (const feature of productRating.featureRatings) {
							featureRatings[feature.id] = feature.rating;
						}
					}
					ratingObj.domainRatings = domainRatings;
					ratingObj.featureRatings = featureRatings;
					collectedData[productRating.id] = ratingObj;
				}
				state.data = collectedData;
			})
			.addCase(getSurveyProductRating.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},

});

export default ratingSlice.reducer;
