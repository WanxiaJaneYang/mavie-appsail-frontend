import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
	TextField, Button, Typography, InputBase, Box, Paper, Skeleton,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import theme from '../../../../theme';
import { baseUrl } from '../../../../utils/getBaseUrl';
import CopyIcon from '../../../icons/CopyIcon';

function ShareLinkTabContent() {
	const { error, loading, code } = useSelector((state) => state.filters.share);
	const [copySuccess, setCopySuccess] = useState('Copy');
	const [isHovered, setIsHovered] = useState(false);
	const copyToClipboard = () => {
		navigator.clipboard.writeText(getLink()).then(() => {
			setCopySuccess('Copied');
		}, () => {
			setCopySuccess('Failed to copy link.');
		});
	};
	const { productId, surveyId } = useParams();
	const getLink = () => {
		if (productId) {
			return `${baseUrl()}#share/product/${productId}/metrics?code=${code}&`;
		}
		if (surveyId) {
			return `${baseUrl()}#share/survey/${surveyId}/metrics?code=${code}&`;
		}
		return '';
	};
	if (error) {
		return (
			<Typography
				sx={{
					fontSize: '14px',
					fontWeight: 600, // semibold
					color: theme.palette.darkest,
				}}
			>
				Failed to generate link
			</Typography>
		);
	}

	if (loading) {
		return (
			<Skeleton
				variant="rectangular"
				width="100%"
				height={50}
				sx={{
					borderRadius: '5px',
				}}
			/>
		);
	}
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				padding: '20px',
			}}
		>
			<Typography
				sx={{
					fontSize: '14px',
					fontWeight: 600, // semibold
					color: theme.palette.darkest,
				}}
			>
				Share Link
			</Typography>
			<Box sx={{
				width: '100%',
				height: '100%',
				marginTop: '10px',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'start',
				alignItems: 'center',
				backgroundColor: theme.palette.primary.backgroundColor,
			}}
			>
				<InputBase
					fullWidth
					value={getLink()}
					margin="normal"
					InputProps={{
						readOnly: true,
					}}
					sx={{
						padding: 1,
					}}
				/>
				<Button
					onClick={copyToClipboard}
					// variant="outlined"
					size="small"
					// variant="contained"
					onMouseEnter={() => setIsHovered(true)} // Set hover state to true
					onMouseLeave={() => setIsHovered(false)} // Set hover state to false
					sx={{
						ml: 1,
						mr: 1,
						width: '30%',
						maxWidth: '75px',
						pading: 1,
						height: '100%',
						fontSize: '12px',
						fontWeight: 600,
						backgroundColor: '#ffffff',
						color: theme.palette.grey,
						fontFamily: 'Inter',
						// backgroundColor: theme.palette.primary.main,
						// color: theme.palette.primary.contrastText,
						'&:hover': {
							backgroundColor: theme.palette.grey,
							color: theme.palette.primary.contrastText,
						},
						'&. MuiButton-endIcon': {
							marginLeft: '0px',
						},

					}}
					endIcon={(
						<CopyIcon
							fillColor={isHovered ? theme.palette.primary.contrastText : theme.palette.grey}
						/>
					)}
				>
					{copySuccess}
				</Button>

			</Box>

			{/* <TextField
				fullWidth
				value={link}
				margin="normal"
				InputProps={{
					readOnly: true,
				}}
			/>
			<Button
				onClick={copyToClipboard}
				variant="circle"
				sx={{
					position: 'relative',

					backgroundColor: theme.palette.primary.main,
					color: theme.palette.primary.contrastText,
					'&:hover': {
						backgroundColor: theme.palette.primary.light,
					},
				}}
			>
				{copySuccess}
			</Button> */}
		</Box>
	);
}

export default ShareLinkTabContent;
