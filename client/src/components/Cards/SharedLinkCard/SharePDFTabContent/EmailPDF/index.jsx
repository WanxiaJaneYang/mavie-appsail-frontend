import {
	Typography, Box, TextField, Chip, IconButton, InputAdornment,
	Stack,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { LoadingButton } from '@mui/lab';
import { resetSendReportSuccess } from '../../../../../features/share';
import { sendProductReport, sendSurveyReport } from '../../../../../thunk';
import theme from '../../../../../theme';
import SuccessMessage from '../../../../SuccessMessage';

function EmailPDF() {
	const dispatch = useDispatch();
	const [sucessMessageOpen, setSuccessMessageOpen] = useState(false);
	const { productId, surveyId } = useParams();
	const {
		comment, commentTitle, reportType, sendReportLoading, sendReportSuccess,
	} = useSelector((state) => state.share);
	const [emails, setEmails] = useState([]);
	const [emailInput, setEmailInput] = useState('');
	const [error, setError] = useState(false);
	const [selectedEmailIndex, setSelectedEmailIndex] = useState(-1);

	const validateEmail = (email) => email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

	const handleAddEmail = () => {
		if (validateEmail(emailInput) && !emails.includes(emailInput)) {
			setEmails([...emails, emailInput]);
			setEmailInput('');
			setError(false);
		} else {
			setError(true);
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			handleAddEmail();
			event.preventDefault();
		}
		if (event.key === 'Backspace' && emailInput === '') {
			event.preventDefault();
			if (selectedEmailIndex === -1 && emails.length > 0) {
				setSelectedEmailIndex(emails.length - 1);
			} else if (selectedEmailIndex !== -1) {
				const newEmails = emails.filter((_, index) => index !== selectedEmailIndex);
				setEmails(newEmails);
				setSelectedEmailIndex(-1);
			}
		}
	};

	const handleSendEmail = () => {
		if (productId) {
			dispatch(sendProductReport({
				productId, emails, comment, commentTitle, reportType,
			}));
		}
		if (surveyId) {
			dispatch(sendSurveyReport({
				surveyId, emails, comment, commentTitle,
			}));
		}
	};

	const handleSuccessMessageClose = () => {
		setSuccessMessageOpen(false);
	};

	useEffect(
		() => {
			if (sendReportSuccess) {
				setSuccessMessageOpen(true);
				dispatch(resetSendReportSuccess());
				setTimeout(
					() => {
						setSuccessMessageOpen(false);
					},
					1000,
				);
			}
		},
		[sendReportSuccess, dispatch],
	);

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
			<Typography sx={{ fontSize: '14px', fontWeight: 600, color: theme.palette.darkest }}>
				Email PDF
			</Typography>
			<Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', marginBottom: 2 }}>
				{emails.map((email, index) => (
					<Chip
						key={`${email}-chip`}
						label={email}
						onDelete={() => setEmails(emails.filter((e) => e !== email))}
						sx={{
							backgroundColor: selectedEmailIndex === index ? theme.palette.grey : 'default',
							color: selectedEmailIndex === index ? 'white' : 'default',
						}}
						onClick={() => setSelectedEmailIndex(index)}
					/>
				))}
			</Stack>
			<Box sx={{
				width: '100%', display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', gap: '20px',
			}}
			>
				<TextField
					fullWidth
					value={emailInput}
					onChange={(e) => setEmailInput(e.target.value)}
					placeholder="Enter email and press 'Enter'"
					error={error}
					helperText={error ? 'Please enter a valid email.' : ''}
					onKeyDown={handleKeyDown}
					InputProps={{
						// startAdornment: emails.map((email, index) => (
						// 	<Chip
						// 		key={`${email}-chip`}
						// 		label={email}
						// 		onDelete={() => setEmails(emails.filter((e) => e !== email))}
						// 		sx={{
						// 			marginTop: 1,
						// 			marginLeft: 1,
						// 			marginRight: 1,
						// 			marginBottom: 1,
						// 			backgroundColor: selectedEmailIndex === index ? theme.palette.grey : 'default',
						// 			color: selectedEmailIndex === index ? 'white' : 'default',
						// 		}}
						// 		onClick={() => setSelectedEmailIndex(index)}
						// 	/>
						// )),
						endAdornment: (
							<InputAdornment
								position="end"

							>
								<IconButton
									onClick={handleAddEmail}
									edge="end"
									sx={{ p: '10px' }}
								>
									<AddCircleOutlineIcon />
								</IconButton>
							</InputAdornment>
						),
					}}
					sx={{
						'& .MuiOutlinedInput-input': {
							padding: 0, // Adjust padding to ensure input text and chips are aligned
						},
						'& .MuiInputBase-root': {
							padding: 1, // Adjust padding to ensure input text and chips are aligned
						},
					}}
				/>
				<LoadingButton
					variant="outlined"
					sx={{
						fontSize: '12px', minWidth: '95px', justifySelf: 'flex-end', height: '33px',
					}}
					loading={sendReportLoading}
					onClick={handleSendEmail}
					disabled={emails?.length === 0}

				>
					Email PDF
				</LoadingButton>
			</Box>
			<SuccessMessage
				open={sucessMessageOpen}
				message="Report Request Sent Successfully"
				onClose={handleSuccessMessageClose}
			/>
		</Box>
	);
}

export default EmailPDF;
