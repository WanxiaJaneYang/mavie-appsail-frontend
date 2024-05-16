/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getCodesigners } from '../../thunk';

const codesignerSlice = createSlice({
	name: 'codesigner',
	initialState: {
		loading: false,
		error: null,
		// entities: null,
		entities: null,
		// ids: null,
		ids: [],
	},

	reducers: {
	},

	extraReducers: (builder) => {
		builder.addCase(getCodesigners.pending, (state) => {
			state.loading = true;
			state.error = null;
			state.entities = null;
			state.ids = [];
		});
		builder.addCase(getCodesigners.fulfilled, (state, action) => {
			state.loading = false;
			state.entities = action.payload?.reduce((acc, codesigner) => {
				acc[codesigner.id] = codesigner;
				return acc;
			}, {});
			state.ids = action.payload?.map((codesigner) => codesigner.id);
		});
		builder.addCase(getCodesigners.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload?.error;
			state.entities = null;
			state.ids = [];
		});
	},
});

// export const {
// 	fetchPersonaRequest,
// 	fetchPersonaSuccess,
// 	fetchPersonaFailure,
// } = personaSlice.actions;

export default codesignerSlice.reducer;
