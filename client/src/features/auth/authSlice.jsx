/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { login, auth, logout } from '../../thunk';

const handlePending = (state) => {
	state.loading = true;
	state.error = null;
};

const handleLoginFulfilled = (state, action) => {
	state.loading = false;
	state.isLoggedIn = true;
	state.userId = action.payload.userId;
	state.error = null;
};

const handleRejected = (state, action) => {
	state.loading = false;
	state.error = action.payload?.error;
	state.isLoggedIn = false;
};

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn: null,
		userId: null,
		loading: false,
		error: null,
		success: null,
		logoutPending: false,
		logoutError: null,
		isShare: false,
		shareCode: null,
	},
	reducers: {
		resetProcess: (state) => {
			state.error = null;
			state.success = null;
			state.loading = false;
		},
		setIsShare: (state, action) => {
			state.isShare = action.payload;
		},
		setShareCode: (state, action) => {
			state.shareCode = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, handlePending)
			.addCase(login.fulfilled, handleLoginFulfilled)
			.addCase(login.rejected, handleRejected)
			.addCase(auth.pending, handlePending)
			.addCase(auth.fulfilled, handleLoginFulfilled)
			.addCase(auth.rejected, handleRejected)
			.addCase(logout.pending, (state) => {
				state.logoutPending = true;
				state.logoutError = null;
			})
			.addCase(logout.fulfilled, (state) => {
				state.logoutPending = false;
				state.isLoggedIn = false;
				state.userId = null;
			})
			.addCase(logout.rejected, (state, action) => {
				state.logoutPending = false;
				state.logoutError = action.error.message;
			});
	},
});

export const { resetProcess, setIsShare, setShareCode } = authSlice.actions;
export default authSlice.reducer;
