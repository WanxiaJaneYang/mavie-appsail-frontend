/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
	login, auth, getShareProductAccessInfo,
} from '../../thunk';

const productListSlice = createSlice({
	name: 'productList',
	initialState: {
		currentProduct: null,
		products: [
		],
		loading: false,
		error: null,
	},
	reducers: {
		setCurrentProduct(state, action) {
			// console.log(`setCurrentProduct ${action.payload}`);
			state.currentProduct = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true;
				state.error = null;
				state.products = [];
				state.currentProduct = null;
			})
			.addCase(login.fulfilled, (state, action) => {
				// console.log(`login fulfilled productListSlice ${action.payload.productList}`);
				const { productList } = action.payload;
				state.loading = false;
				state.products = productList;
				state.error = null;
			})
			.addCase(login.rejected, (state, action) => {
				// console.log(`login rejected ${action.payload}`);
				state.loading = false;
				state.error = action.payload;
				state.products = [];
				state.currentProduct = null;
			})
			.addCase(auth.pending, (state) => {
				// console.log('auth pending');
				state.loading = true;
				state.error = null;
				state.products = [];
				state.currentProduct = null;
			})
			.addCase(auth.fulfilled, (state, action) => {
				// console.log(`auth fulfilled${action.payload}`);
				const { productList } = action.payload;
				state.loading = false;
				state.products = productList;
				state.error = null;
			})
			.addCase(auth.rejected, (state, action) => {
				// console.log(`auth rejected ${action.payload}`);
				state.loading = false;
				state.error = action.payload;
				state.products = [];
				state.currentProduct = null;
			})
			.addCase(getShareProductAccessInfo.pending, (state) => {
				state.loading = true;
				state.error = null;
				state.products = [];
				state.currentProduct = null;
			})
			.addCase(getShareProductAccessInfo.fulfilled, (state, action) => {
				// console.log(`auth fulfilled${action.payload}`);
				const productList = [action.payload];
				state.loading = false;
				state.products = productList;
				state.error = null;
			})
			.addCase(getShareProductAccessInfo.rejected, (state, action) => {
				// console.log(`auth rejected ${action.payload}`);
				state.loading = false;
				state.error = action.payload;
				state.products = [];
				state.currentProduct = null;
			});
	},
});

export const {
	setCurrentProduct,
} = productListSlice.actions;
export default productListSlice.reducer;
