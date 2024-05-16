// this middleware is used to modify the URL of the API request
// based on the state of the application.
// isShare is set via the shareRoute in the router.
// In this case, the URL is modified if the user is viewing shared data.
import apiConfig from '../utils/apiHelper/apiConfig';

const apiMiddleware = (store) => (next) => (action) => {
	// console.log('action:', action); // Add this to debug
	if (action.type === 'API_CALL') {
		// Check if the action should have a modified URL
		const { isShare, shareCode } = store.getState().auth; // Assuming you have some state to check
		// console.log('isShare:', isShare); // Add this to debug
		if (isShare) {
			// console.log('isShare:', isShare); // Add this to debug
			// eslint-disable-next-line no-param-reassign
			// console.log('set share in api middleware');
			// console.log('shareCode:', shareCode); // Add this to debug
			apiConfig.setShare(true);
			apiConfig.setShareCode(shareCode);
			// console.log('share:', apiConfig.getShare()); // Add this to debug
		}
	}

	// Proceed with the next middleware or dispatch
	return next(action);
};

export default apiMiddleware;
