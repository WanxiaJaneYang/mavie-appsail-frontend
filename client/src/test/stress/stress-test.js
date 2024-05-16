import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'https://maviecustomerfrontend-698471191.development.catalystserverless.com'; // Replace with your actual HTTPS backend URL
const users = [
	{ email: 'graham.marshall@gcma.net.au', password: 'jason@123' },
	{ email: 'gsma-trial@s2s.email', password: 'jason@123' },
	{ email: 'admin@test.com', password: 'jason@123' },
];
export const options = {
	stages: [
		{ duration: '3m', target: 10 }, // Stay at 20 users for 3 minutes
	],
};

const accessProduct = (productList) => {
	// Pick a random product from the productList
	const randomProduct = productList[Math.floor(Math.random() * productList.length)];
	const randomProductId = randomProduct.id;

	sleep(1); // Simulate think time

	// Call getProductInfo API
	const productInfoResponse = http.get(`${BASE_URL}/product/${randomProductId}`);
	const productInfoSuccess = check(productInfoResponse, {
		'Product info retrieved successfully': (r) => r.status === 200,
	});
	if (!productInfoSuccess) {
		// Log detailed error information if login failed
		console.log(`get product info failed for product id: ${randomProductId}, status: ${productInfoResponse.status}, body: ${productInfoResponse.body}`);
	} else {
		console.log(`get product info successfully, product id: ${randomProductId}`);
	}
	// Call getProductFilter API
	const productFilterResponse = http.get(`${BASE_URL}/product/${randomProductId}/filter`);
	const productFilterSuccess = check(productFilterResponse, {
		'Product filter retrieved successfully': (r) => r.status === 200,
	});
	if (!productFilterSuccess) {
		// Log detailed error information if login failed
		console.log(`get product filter failed for product id: ${randomProductId}, status: ${productFilterResponse.status}, body: ${productFilterResponse.body}`);
	} else {
		console.log(`get product filter successfully, product id: ${randomProductId}`);
	}

	// Call getProductRating API
	const productRatingResponse = http.get(`${BASE_URL}/product/${randomProductId}/rating`);
	const productRatingSuccess = check(productRatingResponse, {
		'Product rating retrieved successfully': (r) => r.status === 200,
	});
	if (!productRatingSuccess) {
		// Log detailed error information if login failed
		console.log(`get product rating failed for product id: ${randomProductId}, status: ${productRatingResponse.status}, body: ${productRatingResponse.body}`);
	} else {
		console.log(`get product rating successfully, product id: ${randomProductId}`);
	}

	// access random product feature for 3 times
	const filterResponseJson = JSON.parse(productFilterResponse.body);
	const filter = filterResponseJson.features;
	for (let i = 0; i < 3; i += 1) {
		accessProductFeature(randomProductId, filter);
		sleep(1); // Simulate think time
	}
};

const accessProductFeature = (productId, filter) => {
	const randomFilter = filter[Math.floor(Math.random() * filter.length)];
	const randomFilterId = randomFilter.id;
	sleep(1); // Simulate think time
	const productFeatureDetailsResponse = http.get(`${BASE_URL}/product/${productId}/feature/${randomFilterId}`);
	const featureSuccess = check(productFeatureDetailsResponse, {
		'Product feature details retrieved successfully': (r) => r.status === 200,
	});
	if (!featureSuccess) {
		// Log detailed error information if login failed
		console.log(`get product feature details failed for product id: ${productId} and filter id: ${randomFilterId}, status: ${productFeatureDetailsResponse.status}, body: ${productFeatureDetailsResponse.body}`);
	} else {
		console.log(`get product feature details successfully, product id: ${productId} and filter id: ${randomFilterId}`);
	}
};

export default function () {
	// Step 1: Pick a random user
	const randomUser = users[Math.floor(Math.random() * users.length)];
	const loginPayload = JSON.stringify({
		email: randomUser.email,
		password: randomUser.password,
	});
	const loginParams = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	// Step 2: Call login API
	const loginResponse = http.post(`${BASE_URL}/login`, loginPayload, loginParams);
	const loginSuccessful = check(loginResponse, {
		'Login successful': (r) => r.status === 200,
	});
	if (!loginSuccessful) {
		// Log detailed error information if login failed
		console.log(`Login failed for user ${randomUser.email}, status: ${loginResponse.status}, body: ${loginResponse.body}`);
	} else {
		console.log(`user login successfully, user email: ${randomUser.email}`);
	}

	// Step 3: Extract the productList from the login response
	const responseJson = JSON.parse(loginResponse.body);
	console.log(`responseJson: ${JSON.stringify(responseJson)}`);
	const { productList } = responseJson;
	if (!productList || productList.length === 0) {
		console.log('No products found for this user');
		return;
	}
	// Step 4: Access random product for 3 times
	for (let i = 0; i < 3; i += 1) {
		accessProduct(productList);
		sleep(1); // Simulate think time
	}
}
