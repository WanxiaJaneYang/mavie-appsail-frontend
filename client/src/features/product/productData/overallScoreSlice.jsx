/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getProductInfo } from '../../../thunk';

const overallScoreSlice = createSlice({
	name: 'overallScore',
	initialState: {
		loading: false,
		error: null,
		data: null,
	},

	reducers: {
	},

	extraReducers: (builder) => {
		builder
			.addCase(getProductInfo.pending, (state) => {
				state.loading = true;
				state.error = null;
				state.data = null;
			})
			.addCase(getProductInfo.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload.overallRating;
			})
			.addCase(getProductInfo.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.data = null;
			});
	},

});

export default overallScoreSlice.reducer;
