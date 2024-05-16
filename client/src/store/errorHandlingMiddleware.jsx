import { addErrorMessage, popErrorMessage } from '../features/errorMessages/errorMessageSlice';

const errorHandlingMiddleware = ({ dispatch }) => (next) => (action) => {
	// Check if the action is a rejected thunk
	if (action?.type?.endsWith('/rejected')) {
		// check if the action comes from the auth slice and the page is not the login page
		if (action?.payload?.suppressed === false) {
			console.log('Rejected action:', action); // Add this to debug
			// Extract error message
			const errorMessage = action?.payload?.error;

			// Dispatch a global error handling action, for example, to show an error message
			// You need to implement the addErrorMessage action and the corresponding reducer
			dispatch(addErrorMessage(errorMessage));
			setTimeout(() => {
				dispatch(popErrorMessage());
			}, 5000);
		}
	}

	return next(action);
};

export default errorHandlingMiddleware;
