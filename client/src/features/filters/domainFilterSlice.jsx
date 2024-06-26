/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getProductFilter, getSurveyDomains } from '../../thunk';
import { RESET_STATE } from '../../constants';

const domainFilterSlice = createSlice({
	name: 'domainFilter',
	initialState: {},

	reducers: {
		setSelectedDomain: (state, { payload }) => {
			Object.keys(payload).forEach((key) => {
				state[key] = payload[key];
			});
		},
	},

	extraReducers: (builder) => {
		builder.addCase(getProductFilter.pending, (state) => {
			// reset to all true, clear all filters, reset to initial state
			state = undefined;
		});
		builder.addCase(getSurveyDomains.pending, (state) => {
			// reset to all true, clear all filters, reset to initial state
			state = undefined;
		});
		builder.addCase(getSurveyDomains.fulfilled, (state, action) => {
			const domainList = action.payload.domains.reduce(
				(acc, domain) => {
					acc[domain.id] = true;
					return acc;
				},
				{},
			);
			// Correct way to update the state
			Object.keys(domainList).forEach((key) => {
				state[key] = domainList[key];
			});
		});
		builder.addCase(getProductFilter.fulfilled, (state, action) => {
			const domainList = action.payload.domains.reduce(
				(acc, domain) => {
					acc[domain.id] = true;
					return acc;
				},
				{},
			);

			// Correct way to update the state
			Object.keys(domainList).forEach((key) => {
				state[key] = domainList[key];
			});
		});

		builder.addCase(RESET_STATE, (state) => {
			// reset to all true
			Object.keys(state).forEach((key) => {
				state[key] = true;
			});
		});
	},

});

export const { setSelectedDomain } = domainFilterSlice.actions;

export default domainFilterSlice.reducer;
