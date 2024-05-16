/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// import getProductFilter from '../../thunk/productFilterThunk';
import { getPersona } from '../../thunk';

const personaSlice = createSlice({
	name: 'persona',
	initialState: {
		loading: false,
		error: null,
		entities: null,
		ids: null,
	},

	reducers: {
	},

	extraReducers: (builder) => {
		builder
			.addCase(getPersona.pending, (state) => {
				state.loading = true;
				state.error = null;
				state.entities = null;
				state.ids = null;
			})
			.addCase(getPersona.fulfilled, (state, action) => {
				state.loading = false;
				state.entities = action.payload.reduce((entities, persona) => {
					entities[persona.id] = persona;
					return entities;
				}, {});
				state.ids = action.payload.map((persona) => persona.id);
			})
			.addCase(getPersona.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.entities = null;
				state.ids = null;
			});
	},
});

// export const {
// 	fetchPersonaRequest,
// 	fetchPersonaSuccess,
// 	fetchPersonaFailure,
// } = personaSlice.actions;

export default personaSlice.reducer;
