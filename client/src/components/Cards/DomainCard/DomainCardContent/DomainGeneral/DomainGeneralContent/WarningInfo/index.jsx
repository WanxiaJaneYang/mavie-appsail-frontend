import { Typography, Box } from '@mui/material';
import propTypes from 'prop-types';
import WarningIcon from '../../../../../../icons/WarningIcon';

function WarningInfo({ min = 5 }) {
	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'row',
			backgroundColor: 'rgba(253, 194, 41, 0.5)',
			justifyContent: 'center',
			borderRadius: '10px',
			marginTop: '-5px',
			marginBottom: '-10px',
			paddingLeft: '5px', // [mobile, tablet, desktop
			paddingRight: '5px', // [mobile, tablet, desktop
			paddingBottom: '[1px, 2px, 2px]', // [mobile, tablet, desktop
			height: '90%',
			// justifySelf: 'flex-end',
			width: '100%',
			overflow: 'visible',
		}}
		>
			<WarningIcon
				sx={{
					width: ['16px', '18px', '14px'],
					height: ['16px', '18px', '14px'],
				}}
			/>
			<Typography
				sx={{
					fontFamily: 'Inter, sans-serif',
					fontWeight: 500,
					fontSize: '8px',
					textAlign: 'left',
					color: '#455468',
					marginTop: 'auto',
					marginLeft: ['3px', '4px', '3px'],
					whiteSpace: 'nowrap',
				}}
			>
				Minimum
				{' '}
				{min?.toFixed(1) || 5}
			</Typography>
		</Box>
	);
}

WarningInfo.propTypes = {
	min: propTypes.number,
};

WarningInfo.defaultProps = {
	min: 5,
};

export default WarningInfo;
