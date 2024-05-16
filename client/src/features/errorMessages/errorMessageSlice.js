/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const errorMessageSlice = createSlice({
	name: 'errorMessage',
	initialState: {
		messages: [],
	},

	reducers: {
		clearAllErrorMessage: (state) => {
			state.messages = [];
		},
		addErrorMessage: (state, action) => {
			// if the error message is already in the list, don't add it again
			if (!(state.messages.includes(action.payload))) {
				state.messages.push(action?.payload);
			}
		},
		popErrorMessage: (state) => {
			// only remove the first error message
			// if there are messages in the list
			if (state.messages?.length > 0) {
				state.messages.shift();
			}
		},
	},

});

export const {
	clearAllErrorMessage,
	addErrorMessage,
	popErrorMessage,
} = errorMessageSlice.actions;

export default errorMessageSlice.reducer;

// // Define your thunk action
// export const addErrorMessageWithTimeout = createAsyncThunk(
// 	'errorMessage/addWithTimeout',
// 	async (message, { dispatch, getState }) => {
// 		const { errorMessage } = getState();
// 		// Check if the message is already in the state to avoid duplicates
// 		if (!errorMessage.messages.includes(message)) {
// 			dispatch(addErrorMessage(message));
// 			// Wait for 5 seconds before removing the message
// 			// setTimeout(() => {
// 			// 	dispatch(popErrorMessage());
// 			// }, 5000);
// 		}
// 	},
// );
