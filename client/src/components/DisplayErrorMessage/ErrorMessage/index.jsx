import PropTypes from 'prop-types';
import { Snackbar, Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import { popErrorMessage } from '../../../features/errorMessages/errorMessageSlice';

function ErrorMessage({
	message, open, index,
}) {
	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(popErrorMessage());
	};
	return (
		<Snackbar
			open={open}
			autoHideDuration={2400} // Adjust the duration as needed
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
			style={{ top: 50 + index * 60 }} // Adjust position based on index
		>
			<Alert
				onClose={handleClose}
				severity="error"
				variant="filled"
				sx={{
					fontSize: {
						xs: 12,
						sm: 14,
						md: 16,
					},
					fontWeight: {
						xs: 400,
						sm: 500,
						md: 600,
					},
				}}
			>
				{message || 'An unexpected error occurred'}
			</Alert>
		</Snackbar>
	);
}

ErrorMessage.propTypes = {
	message: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	index: PropTypes.number.isRequired,
};

export default ErrorMessage;
