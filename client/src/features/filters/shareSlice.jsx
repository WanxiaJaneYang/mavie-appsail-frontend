/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getProductShareLink, getSurveyShareLink } from '../../thunk';

const shareSlice = createSlice({
	name: 'share',
	initialState: {
		loading: false,
		error: false,
		code: null,
	},
	reducers: {
	},

	extraReducers: (builder) => {
		builder
			.addCase(getProductShareLink.pending, (state) => {
				state.loading = true;
				state.error = false;
				state.code = null;
			})
			.addCase(getProductShareLink.fulfilled, (state, action) => {
				state.loading = false;
				state.error = false;
				state.code = action.payload.code;
			})
			.addCase(getProductShareLink.rejected, (state, action) => {
				state.loading = false;
				state.error = true;
				state.code = null;
			})
			.addCase(getSurveyShareLink.pending, (state) => {
				state.loading = true;
				state.error = false;
				state.code = null;
			})
			.addCase(getSurveyShareLink.fulfilled, (state, action) => {
				state.loading = false;
				state.error = false;
				state.code = action.payload.code;
			})
			.addCase(getSurveyShareLink.rejected, (state, action) => {
				state.loading = false;
				state.error = true;
				state.code = null;
			});
	},
});

export default shareSlice.reducer;
