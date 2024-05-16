import React from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ReactComponent as PasswordIcon } from '../../../../images/svg/LockKey.svg';

function PasswordField({
	password, onChange, passwordError, showPassword, setShowPassword,
}) {
	const togglePasswordVisibility = () => setShowPassword(!showPassword);

	return (
		<TextField
			margin="normal"
			required
			fullWidth
			name="password"
			label="Password"
			type={showPassword ? 'text' : 'password'}
			id="password"
			autoComplete="current-password"
			value={password}
			onChange={onChange}
			error={Boolean(passwordError)}
			helperText={passwordError}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<PasswordIcon />
					</InputAdornment>
				),
				endAdornment: (
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={togglePasswordVisibility}
							edge="end"
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
}

export default PasswordField;

PasswordField.propTypes = {
	password: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	passwordError: PropTypes.string.isRequired,
	showPassword: PropTypes.bool.isRequired,
	setShowPassword: PropTypes.func.isRequired,
};
