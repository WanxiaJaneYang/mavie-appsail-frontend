import React from 'react';
import { LoadingButton } from '@mui/lab';
import PropTypes from 'prop-types';
import theme from '../../../../theme';

function SubmitButton({ loading }) {
	return (
		<LoadingButton
			type="submit"
			fullWidth
			variant="outlined"
			sx={{
				mt: 3,
				mb: 2,
				borderRadius: {
					xs: 40,
					sm: 40,
					md: 52,
				},
				height: {
					xs: 36,
					sm: 36,
					md: 48,
				},
				backgroundColor: theme.palette.secondary.main,
				color: theme.palette.primary.contrastText,
				'&:hover': {
					backgroundColor: theme.palette.secondary.light,
				},
			}}
			color="primary"
			loading={loading}
		>
			Login
		</LoadingButton>
	);
}

export default SubmitButton;

SubmitButton.propTypes = {
	loading: PropTypes.bool.isRequired,
};
