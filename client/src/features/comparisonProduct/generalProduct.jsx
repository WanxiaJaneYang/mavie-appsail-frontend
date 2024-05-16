/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getSurveyProductInfo } from '../../thunk';

const generalProductSlice = createSlice({
	name: 'productDetail',
	initialState: {
		loading: false,
		error: null,
		ids: [],
		entities: {
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(getSurveyProductInfo.pending, (state) => {
				state.loading = true;
				state.error = null;
				state.ids = [];
				state.entities = {};
			})
			.addCase(getSurveyProductInfo.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error;
				state.ids = [];
				state.entities = {};
			})
			.addCase(getSurveyProductInfo.fulfilled, (state, action) => {
				state.loading = false;
				state.entities = action.payload.reduce((acc, product) => {
					acc[product.id] = product;
					return acc;
				}, {});
				state.ids = action.payload.map((product) => product.id);
			});
	},

});

export default generalProductSlice.reducer;
