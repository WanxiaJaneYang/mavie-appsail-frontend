import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import { ReactComponent as EmailIcon } from '../../../../images/svg/EnvelopeSimple.svg';

function EmailField({ email, onChange, emailError }) {
	return (
		<TextField
			margin="normal"
			required
			fullWidth
			id="email"
			label="Email Address"
			name="email"
			autoComplete="email"
			autoFocus
			value={email}
			onChange={onChange}
			error={Boolean(emailError)}
			helperText={emailError}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<EmailIcon />
					</InputAdornment>
				),
			}}
		/>
	);
}

export default EmailField;

EmailField.propTypes = {
	email: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	emailError: PropTypes.string.isRequired,
};
