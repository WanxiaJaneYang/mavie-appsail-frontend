/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getSurveyProductRating } from '../../../thunk';

const productDomainsSlice = createSlice({
	name: 'productDomains',
	initialState: {
		loading: false,
		error: null,
		data: null,
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
				const newData = action.payload.domainRatings.reduce((acc, domain) => {
					acc[domain.id] = {
						rating: domain.rating,
						expertOpinion: domain.expertOpinion,
					};
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
	getDomains,
	getDomainsSuccess,
	getDomainsFailure,
} = productDomainsSlice.actions;

export default productDomainsSlice.reducer;
