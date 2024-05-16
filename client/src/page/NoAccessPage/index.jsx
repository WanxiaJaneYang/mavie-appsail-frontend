import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../thunk';

function NoAccessPage() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [counter, setCounter] = useState(5);
	const interval = setInterval(() => {
		if (counter === 0) {
			clearInterval(interval);
			dispatch(logout());
			navigate('/login');
		} else {
			setCounter(counter - 1);
		}
	}, 1000);

	useEffect(
		() => () => clearInterval(interval),
		[interval],
	);

	return (
		<div>
			<h2>You do not have access to any products or surveys.</h2>
			<h1>
				You will be redirected to the login page in
				{' '}
				{counter}
				{' '}
				seconds.
			</h1>
		</div>
	);
}

export default NoAccessPage;
