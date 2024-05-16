// apiUtils.js
import axiosInstance from './axiosInstance';

/**
 * Base function to make API requests.
 * @param {string} path - The API endpoint.
 * @param {string} [method='get'] - HTTP method.
 * @param {Object} [data=null] - Payload for POST requests.
 * @param {Object} [params={}] - URL parameters.
 * @param {boolean} [shared=false] - Flag to determine if the request is for shared data.
 * @param {Object} [options={}] - Additional axios config options.
 * @returns {Promise} - Promise that resolves to the API response.
 */
const makeApiRequest = async ({
	path, method = 'get', data = null, params = {}, shared = false, options = {},
}) => {
	// Determine the base path dynamically based on access type
	const basePath = shared ? '/share' : '';
	const fullPath = `${basePath}${path}`;

	// Build the axios request configuration
	const config = {
		method,
		url: fullPath,
		...(data && { data }),
		params,
		...options,
	};

	const response = await axiosInstance(config);
	return response;
};

export default makeApiRequest;
