import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import EmailField from './EmailField'; // Assumes EmailField handles its own state and errors
import PasswordField from './PasswordField'; // Assumes PasswordField handles its own state and errors
import RememberMeCheckbox from './RememberMeCheckbox';
import SubmitButton from './SubmitButton';
import ErrorMessage from '../../DisplayErrorMessage/ErrorMessage';
import WelcomeComponent from '../WelcomeComponent'; // A welcome banner or component
import { resetProcess } from '../../../features/auth/authSlice';
import { login } from '../../../thunk';

function LoginForm() {
	const { loading, error } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const rememberMeRef = useRef(null);
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const validateEmail = () => {
		if (!email) return 'Email is required';
		if (!/\S+@\S+\.\S+/.test(email)) return 'Email is invalid';
		return '';
	};

	const validatePassword = () => {
		if (!password) return 'Password is required';
		return '';
	};

	useEffect(
		// Automatically reset any previous error states upon component mount or error change
		() => () => dispatch(resetProcess()),
		[dispatch, error],
	);

	const handleSubmit = async (event) => {
		event.preventDefault();

		setEmailError(validateEmail(email));
		setPasswordError(validatePassword(password));

		if (!emailError && !passwordError) {
			dispatch(login({
				email,
				password,
				remember_me: rememberMeRef.current.checked,
			}));
		}
	};

	const onEmailChange = (event) => {
		setEmail(event.target.value);
		if (emailError) setEmailError(''); // Clear email error if it exists
	};

	const onPasswordChange = (event) => {
		setPassword(event.target.value);
		if (passwordError) setPasswordError('');
	};

	return (
		<Box
			component="form"
			noValidate
			onSubmit={handleSubmit}
			sx={{
				my: {
					xs: 2,
					sm: 10,
					md: 12,
					lg: 14,
				},
				mx: 'auto',
				ml: {
					xs: 2,
					sm: 4,
					md: 6,
					lg: 8,
				},
				mr: {
					xs: 2,
					sm: 4,
					md: 6,
					lg: 8,
				},
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'left',
			}}
		>
			<WelcomeComponent />
			<EmailField
				email={email}
				onChange={onEmailChange}
				emailError={emailError}
			/>
			<PasswordField
				password={password}
				onChange={onPasswordChange}
				passwordError={passwordError}
				showPassword={showPassword}
				setShowPassword={(value) => setShowPassword(value)}
			/>
			<RememberMeCheckbox rememberMeRef={rememberMeRef} />
			<SubmitButton loading={loading} />
			{error && <ErrorMessage message={error} handleClose={() => dispatch(resetProcess())} />}
		</Box>
	);
}

export default LoginForm;
