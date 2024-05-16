import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	Navigate, Outlet, useLocation, useNavigate,
} from 'react-router-dom';

import { auth } from '../thunk'; // Assuming you have an action creator

function ProtectedRoute() {
	//
	const { isLoggedIn, userId } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		//
		if (!isLoggedIn) {
			dispatch(auth());
			// if login success, then redirect to the requested page
			// if login fails, then redirect to login page
		}
		if (isLoggedIn && userId && location.state?.from) {
			// if there is a memory of the intended destination, redirect to that page
			navigate(location.state?.from);
		}
	}, [dispatch, isLoggedIn, navigate, userId, location.state?.from]);

	// Redirect unauthenticated users to the login page, retaining the intended destination
	if (isLoggedIn === false) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}
	return <Outlet />;
}

export default ProtectedRoute;
