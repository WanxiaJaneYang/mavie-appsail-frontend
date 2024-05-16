import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import PropTypes from 'prop-types';

function RememberMeCheckbox({ rememberMeRef }) {
	return (
		<FormControlLabel
			control={<Checkbox value="remember" color="primary" inputRef={rememberMeRef} />}
			label="Remember me"
		/>
	);
}

export default RememberMeCheckbox;

RememberMeCheckbox.propTypes = {
	rememberMeRef: PropTypes.shape({
		current: PropTypes.instanceOf(Element),
	}),
};

RememberMeCheckbox.defaultProps = {
	rememberMeRef: null,
};
