import { Box, Typography } from '@mui/material';
import Toggle from '../../../../../Toggle';

function MoreDetailToggle() {
	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
		}}
		>
			<Typography
				// semiBold
				sx={{
					fontSize: ['12px', '14px', '18px'],
					fontWeight: '500',
					color: '#455468',
					fontFamily: 'Inter',
				}}
			>
				More Detail
			</Typography>

			<Toggle size="auto" />

		</Box>
	);
}
export default MoreDetailToggle;
