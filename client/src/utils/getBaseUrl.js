const { REACT_APP_MODE } = process.env;
export const baseUrl = () => {
	console.log('REACT_APP_MODE', REACT_APP_MODE);
	console.log('type of REACT_APP_MODE', typeof REACT_APP_MODE);
	if (REACT_APP_MODE === 'LOCAL') {
		return 'http://localhost:3000/';
	}
	if (REACT_APP_MODE === 'DEVELOPMENT') {
		console.log('REACR_APP_DEV_BASE_URL', process.env.REACR_APP_DEV_BASE_URL || 'https://maviecustomerfrontend-698471191.development.catalystserverless.com/app/index.html');
		return process.env.REACR_APP_DEV_BASE_URL || 'https://maviecustomerfrontend-698471191.development.catalystserverless.com/app/index.html';
	}
	if (REACT_APP_MODE === 'PRODUCTION') {
		return process.env.REACT_APP_PRODUCT_BASE_URL;
	}
	return 'https://results.mavy.com.au/app';
};

export default baseUrl;
