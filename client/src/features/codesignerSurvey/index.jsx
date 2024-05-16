/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getCoDesignerSurvey } from '../../thunk';

const coDesignerSurveySlice = createSlice({
	name: 'coDesignerSurvey',
	initialState: {
		loading: false,
		error: null,
		currentCodesignerId: null,
		survey: null,
	},
	reducers: {
		setCurrentCodesignerId(state, action) {
			state.currentCodesignerId = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getCoDesignerSurvey.pending, (state) => {
			state.loading = true;
			state.error = null;
			state.survey = null;
		});
		builder.addCase(getCoDesignerSurvey.fulfilled, (state, action) => {
			state.loading = false;
			state.survey = action.payload;
		});
		builder.addCase(getCoDesignerSurvey.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.survey = null;
		});
	},
});

export const {
	setCurrentCodesignerId,
} = coDesignerSurveySlice.actions;

export default coDesignerSurveySlice.reducer;
