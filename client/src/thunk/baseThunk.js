import { createAsyncThunk } from '@reduxjs/toolkit';
import { ValidationError } from 'yup';

// Utility for standard error handling
const handleThunkError = (error, thunkAPI, arg) => {
	if (error instanceof ValidationError) {
		console.log('error', error);
		return thunkAPI.rejectWithValue({ error: 'Invalid data structure from server' });
	}
	return thunkAPI.rejectWithValue({
		error: error.message || 'Unknown error',
		suppressed: arg?.suppressed || false,
	});
};

// Base thunk creator function
const createBaseAsyncThunk = (
	typePrefix,
	apiFunction,
	schema,
) => createAsyncThunk(
	typePrefix,
	async (arg, thunkAPI) => {
		try {
			// dispatch thunk api as type API_CALL
			thunkAPI.dispatch({ type: 'API_CALL' });
			const response = await apiFunction(arg);
			if (schema) {
				const validatedResponse = await schema.validate(response);
				return validatedResponse;
			}
			return response;
		} catch (error) {
			return handleThunkError(error, thunkAPI, arg);
		}
	},
);

export default createBaseAsyncThunk;
