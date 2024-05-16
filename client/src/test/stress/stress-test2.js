import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'https://maviecustomerfrontend-698471191.development.catalystserverless.com'; // Replace with your actual HTTPS backend URL

export const options = {
	stages: [
		{ duration: '1m', target: 50 }, // Ramp up to 20 users over 1 minute
	],
};

export default function () {
	const getAccessToken = http.get(`${BASE_URL}/zohoToken`);
	const getAccessTokenSuccess = check(getAccessToken, {
		getAccessTokenSuccess: (r) => r.status === 200,
	});
	if (!getAccessTokenSuccess) {
		console.log(`getAccessToken failed, status: ${getAccessToken.status}, body: ${getAccessToken.body}`);
		return;
	}
	console.log(`getAccessToken successfully, body: ${getAccessToken.body}`);

	sleep(1); // Simulate think time
}
