import { Typography, Box } from '@mui/material';
import WarningIcon from '../../../../icons/WarningIcon';

function WarningInfo() {
	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'row',
			backgroundColor: 'rgba(253, 194, 41, 0.5)',
			justifyContent: 'center',
			borderRadius: '10px',
			marginTop: '5px',
			paddingLeft: '5px', // [mobile, tablet, desktop
			paddingRight: '5px', // [mobile, tablet, desktop
			paddingBottom: '[1px, 2px, 2px]', // [mobile, tablet, desktop
			height: '90%',
		}}
		>
			<WarningIcon
				sx={{
					width: ['16px', '18px', '20px'],
					height: ['16px', '18px', '20px'],
				}}
			/>
			<Typography
				sx={{
					fontFamily: 'Inter, sans-serif',
					fontWeight: 500,
					fontSize: ['6px', '8px', '10px'], // [mobile, tablet, desktop
					textAlign: 'left',
					color: '#455468',
					marginTop: 'auto',
					marginLeft: ['3px', '4px', '5px'],
				}}
			>
				Low score and high importance
			</Typography>
		</Box>
	);
}

export default WarningInfo;
