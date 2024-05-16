/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
	getReport, getSurveyReport, sendProductReport, sendSurveyReport,
} from '../../thunk';

const shareSlice = createSlice({
	name: 'sharePDF',
	initialState: {
		loading: false,
		error: null,
		reportType: 'summary',
		comment: '',
		commentTitle: 'Executive Summary',
		reportContent: null,
		saveReportLoading: false,
		sendReportLoading: false,
		sendReportSuccess: false,
	},

	reducers: {
		setReportType(state, action) {
			state.reportType = action.payload;
		},

		setReportContent(state, action) {
			state.reportContent = action.payload;
		},

		setComment(state, action) {
			state.comment = action.payload;
		},

		setCommentTitle(state, action) {
			state.commentTitle = action.payload;
		},
		resetSendReportSuccess(state) {
			state.sendReportSuccess = false;
		},
	},
	extraReducers: {
		[getReport.pending]: (state) => {
			state.saveReportLoading = true;
		},
		[getReport.fulfilled]: (state, action) => {
			state.saveReportLoading = false;
		},
		[getReport.rejected]: (state, action) => {
			state.saveReportLoading = false;
		},
		[getSurveyReport.pending]: (state) => {
			state.saveReportLoading = true;
		},
		[getSurveyReport.fulfilled]: (state, action) => {
			state.saveReportLoading = false;
		},
		[getSurveyReport.rejected]: (state, action) => {
			state.saveReportLoading = false;
		},
		[sendProductReport.pending]: (state) => {
			state.sendReportLoading = true;
		},
		[sendProductReport.fulfilled]: (state) => {
			state.sendReportLoading = false;
			state.sendReportSuccess = true;
		},
		[sendProductReport.rejected]: (state) => {
			state.sendReportLoading = false;
		},
		[sendSurveyReport.pending]: (state) => {
			state.sendReportLoading = true;
		},
		[sendSurveyReport.fulfilled]: (state) => {
			state.sendReportLoading = false;
			state.sendReportSuccess = true;
		},
		[sendSurveyReport.rejected]: (state) => {
			state.sendReportLoading = false;
		},
	},
});

export const {
	setReportType, setReportContent,
	setComment, setCommentTitle,
	resetSendReportSuccess,
} = shareSlice.actions;

export default shareSlice.reducer;
