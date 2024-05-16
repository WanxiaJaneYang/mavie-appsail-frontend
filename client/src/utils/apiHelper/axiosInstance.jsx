/* eslint-disable no-param-reassign */
import axios from 'axios';
import apiConfig from './apiConfig';

const url = () => {
	console.log(process.env.REACT_APP_MODE);
	if (process.env.REACT_APP_MODE === 'LOCAL') {
		return 'http://localhost:3002';
	}
	if (process.env.REACT_APP_MODE === 'DEVELOPMENT') {
		return process.env.REACT_APP_API_BASE_URL;
	}
	if (process.env.REACT_APP_MODE === 'PRODUCTION') {
		return process.env.REACT_APP_PRODUCTION_API_BASE_URL;
	}

	return process.env.REACT_APP_API_BASE_URL;
};
const axiosInstance = axios.create({
	baseURL: url(),
	withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
	if (apiConfig.getShare()) {
		// Append '/share' prefix to the URL if it's defined
		if (config.url) {
			config.url = `/share${config.url}`;
		}

		// Get the share code from configuration
		const shareCode = apiConfig.getShareCode();
		if (shareCode) {
			// Check if the URL already has query parameters
			const separator = config.url.includes('?') ? '&' : '?';
			// Append the share code with the correct separator
			config.url += `${separator}code=${shareCode}`;
		}
	}
	return config;
}, (error) => Promise.reject(error));

axiosInstance.interceptors.response.use(
	(response) => {
		// if include headers then return response
		if (response?.config?.headers['Include-Headers']) {
			return response;
		}
		return response.data;
	},
	(error) => {
		if (error.response && error.response.status === 404) {
			// if error message contains rating then throw error data not complete
			if (error?.response?.data?.error?.includes('rating')) {
				throw new Error('This survey is not completed');
			}
			if (error?.response?.data?.error?.includes('not found')) {
				throw new Error('Data not found or not available');
			}
			throw new Error('Internet connection is required');
		} else if (error.response) {
			throw new Error(error.response.data.error || 'an error occured, please try again');
		} else if (error.request) {
			throw new Error('cannot connect to the server, please check your internet connection or contact the support team');
		} else {
			throw new Error('an unknown error occured, please contact the support team');
		}
	},
);

export default axiosInstance;
