import {
	Dialog, Typography, Card, CardHeader, CardContent, IconButton, TextField, Button,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../icons/CloseIcon';
import theme from '../../../theme';
import { setComment, setCommentTitle } from '../../../features/share';

function ReportCommentPopup({ open, handleClose }) {
	const dispatch = useDispatch();
	const [tempComment, setTempComment] = useState('');
	const [tempCommentTitle, setTempCommentTitle] = useState('Executive Summary');

	const onCommentChange = (e) => {
		setTempComment(e.target.value);
	};

	const onCommentTitleChange = (e) => {
		setTempCommentTitle(e.target.value);
	};

	const handleSaveComment = () => {
		dispatch(setComment(tempComment));
		dispatch(setCommentTitle(tempCommentTitle));
		handleClose();
	};
	return (
		<Dialog open={open} onClose={handleClose}>
			<Card
				sx={{
					width: '100%', // Adjust as needed, or use maxWidth for responsiveness
					maxWidth: '95vw',
				}}
				elevation={0}
			>
				<CardHeader
					sx={{
						paddingBottom: '0px',
						position: 'sticky',
						topY: 0,
						zIndex: 10,
					}}
					titleTypographyProps={{
						sx: {
							color: theme.palette.darkest,
							fontFamily: 'Inter, sans-serif',
							fontWeight: 600,
							fontSize: '18px',
							textAlign: 'left',
						},
					}}
					title="Edit Comment"
					action={(
						<IconButton onClick={handleClose}>
							<CloseIcon />
						</IconButton>
					)}
				/>
				<CardContent
					sx={{
						width: '400px',
						padding: '15px',
						height: '100%',
						gap: '16px',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'start',
					}}
				>
					<Typography
						sx={{
							fontSize: '14px',
							fontWeight: 600, // semibold
							color: theme.palette.darkest,
						}}
					>
						Comment Title
					</Typography>
					<TextField
						fullWidth
						value={tempCommentTitle}
						onChange={onCommentTitleChange}
					/>
					<Typography
						sx={{
							fontSize: '14px',
							fontWeight: 600, // semibold
							color: theme.palette.darkest,
							mt: 2,
						}}
					>
						Comment
					</Typography>
					<TextField
						fullWidth
						multiline
						rows={4}
						value={tempComment}
						onChange={onCommentChange}
					/>
					<Button
						sx={{
							fontSize: '12px',
							minWidth: '140px',
							mt: 2,
						}}
						variant="outlined"
						onClick={handleSaveComment}
					>
						Save Comment
					</Button>
				</CardContent>
			</Card>
		</Dialog>
	);
}

ReportCommentPopup.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default ReportCommentPopup;
