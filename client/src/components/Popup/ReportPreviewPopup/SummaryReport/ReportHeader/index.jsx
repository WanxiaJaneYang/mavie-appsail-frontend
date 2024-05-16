import { Box, Divider, Typography } from '@mui/material';
import logo from '../../../../../images/svg/Logo.svg';
import theme from '../../../../../theme';

function ReportHeader() {
	const getCurrentDate = () => {
		const date = new Date();
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
		const year = date.getFullYear();

		return `${day}.${month}.${year}`;
	};

	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'start',
			alignItems: 'center',
			height: '60px',
			width: '100%',
		}}
		>
			<Box sx={{
				width: '15%',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'start',
				alignItems: 'center',
				gap: 1,
			}}
			>
				<div
					style={{
						fontFamily: 'Martel',
						fontWeight: '400',
						fontSize: '18px',
						color: '#000000',
					}}
				>
					Mavy
				</div>
				<img
					src={logo}
					alt="Company Logo"
					style={{
						height: '70%',
						width: 'auto',
					}}
				/>
			</Box>
			<Divider
				orientation="vertical"
				sx={{
					margin: '10px',
					height: '60%',
				}}
			/>
			<Typography
				sx={{
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '18px',
					width: '65%',
				}}
			>
				Product Rating Summary
			</Typography>
			<Box
				width="10%"
				height="100%"
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-end',
					padding: 1,
				}}
			>
				<Typography
					sx={{
						fontFamily: 'Inter, sans-serif',
						fontWeight: 'medium', // '600',
						fontSize: '10px',
						color: theme.palette.grey,
						alignSelf: 'flex-start',
					}}
				>
					{getCurrentDate()}
				</Typography>
			</Box>
		</Box>
	);
}
export default ReportHeader;
