/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { login, auth, getShareSurveyAccessInfo } from '../../thunk';

const surveySelectorSlice = createSlice({
	name: 'surveySelector',

	initialState: {
		isSurvey: false,
		surveyList: [],
		currentSurvey: null,
		selectedRelatedProductIds: [],
		loading: false,
		error: null,
	},

	reducers: {
		setIsSurvey(state, action) {
			state.isSurvey = action.payload;
		},
		setCurrentSurvey(state, action) {
			state.currentSurvey = action.payload;
			state.selectedRelatedProductIds = action.payload
				?.relatedProductList?.map((product) => product.id);
		},
		setSelectedProductIds(state, action) {
			state.selectedRelatedProductIds = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.surveyList = action.payload.surveyList;
			state.loading = false;
			state.error = null;
		});

		builder.addCase(auth.fulfilled, (state, action) => {
			state.surveyList = action.payload.surveyList;
			state.loading = false;
			state.error = null;
		});

		builder.addCase(auth.rejected, (state) => {
			state.surveyList = [];
			state.loading = false;
			state.error = null;
			state.currentSurvey = null;
			state.selectedRelatedProductIds = [];
		});

		builder.addCase(login.rejected, (state) => {
			state.surveyList = [];
			state.loading = false;
			state.error = null;
			state.currentSurvey = null;
			state.selectedRelatedProductIds = [];
		});

		builder.addCase(login.pending, (state) => {
			state.loading = true;
			state.error = null;
			state.currentSurvey = null;
			state.selectedRelatedProductIds = [];
		});

		builder.addCase(auth.pending, (state) => {
			state.loading = true;
			state.error = null;
			state.currentSurvey = null;
			state.selectedRelatedProductIds = [];
		});
		builder.addCase(getShareSurveyAccessInfo.fulfilled, (state, action) => {
			state.surveyList = [action.payload];
			state.loading = false;
			state.error = null;
		});

		builder.addCase(getShareSurveyAccessInfo.pending, (state, action) => {
			state.loading = true;
			state.error = null;
			state.currentSurvey = null;
			state.selectedRelatedProductIds = [];
		});

		builder.addCase(getShareSurveyAccessInfo.rejected, (state) => {
			state.surveyList = [];
			state.loading = false;
			state.error = null;
			state.currentSurvey = null;
			state.selectedRelatedProductIds = [];
		});
	},
});

export const {
	setIsSurvey,
	setCurrentSurvey, setSelectedProductIds,
} = surveySelectorSlice.actions;

export default surveySelectorSlice.reducer;
