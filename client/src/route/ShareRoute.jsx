import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useSearchParams, useParams } from 'react-router-dom';
import { setIsShare, setShareCode } from '../features/auth/authSlice';
import { getShareProductAccessInfo, getShareSurveyAccessInfo } from '../thunk';

function ShareRoute() {
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	const { productId, surveyId } = useParams();
	const shareCode = searchParams.get('code');
	const [isDispatched, setIsDispatched] = useState(false);

	useEffect(() => {
		// Dispatch setIsShare
		dispatch(setIsShare(true));
		// Dispatch setShareCode
		console.log('shareCode', shareCode);
		dispatch(setShareCode(shareCode));
		// Set isDispatched to true after a short delay to simulate dispatch time
		const dispatchTimeout = setTimeout(() => {
			setIsDispatched(true);
		}, 50); // Adjust the delay time as needed
		// Cleanup function to clear the timeout
		return () => clearTimeout(dispatchTimeout);
	}, [dispatch]);

	useEffect(() => {
		if (isDispatched && productId) {
			dispatch(getShareProductAccessInfo({ productId }));
		} else if (isDispatched && surveyId) {
			dispatch(getShareSurveyAccessInfo({ surveyId }));
		}
	});
	// Render the Outlet only when isDispatched is true
	return isDispatched ? <Outlet /> : <div>Loading...</div>;
}

export default ShareRoute;
