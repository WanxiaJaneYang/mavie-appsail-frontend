/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getPersona } from '../../thunk';
import { RESET_STATE } from '../../constants';

const personaSlice = createSlice({
	name: 'personaFilter',
	initialState: {
	},

	reducers: {
		// reducer to set min and max values for persona
		setSelectedPersonaRange(state, action) {
			// console.log('setSelectedPersonaRange', action.payload);
			const {
				id, selectedMin, selectedMax,
			} = action.payload;
			state[id].selectedMin = selectedMin;
			state[id].selectedMax = selectedMax;
		},

	},

	extraReducers: (builder) => {
		builder.addCase(getPersona.pending, (state) => {
			state = undefined;
		});
		builder.addCase(getPersona.rejected, (state) => {
			state = undefined;
		});
		builder.addCase(getPersona.fulfilled, (state, action) => {
			const personaList = action.payload.reduce(
				(acc, persona) => {
					acc[persona.id] = {
						allowedMin: parseInt(persona.min, 10),
						allowedMax: parseInt(persona.max, 10),
						selectedMax: parseInt(persona.max, 10),
						selectedMin: parseInt(persona.min, 10),
						name: persona.name,
					};
					return acc;
				},
				{},
			);
			// Set the state but reset queryParamString to an empty string
			Object.assign(state, personaList);
		});

		builder.addCase(RESET_STATE, (state) => {
			Object.keys(state)?.forEach((key) => {
				// if key is the persona id, reset selected to true and min and max to default
				if (key !== 'queryParamString') {
					// if persona is binary, set min to 0 and max to 1, else set min to 1 and max to 5
					state[key].selectedMin = state[key]?.allowedMin;
					state[key].selectedMax = state[key]?.allowedMax;
				}
			});
		});
	},
});

export const { setSelectedPersona, setSelectedPersonaRange } = personaSlice.actions;
export default personaSlice.reducer;
