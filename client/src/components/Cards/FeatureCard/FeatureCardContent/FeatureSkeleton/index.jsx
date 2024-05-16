import { Box, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';

function FeatureSkeleton() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center', // Center the gauge horizontally
				alignItems: 'center', // Center the gauge vertically
				paddingRight: '10px',
			}}
		>
			<Skeleton
				variant="rectangular"
				width="100%"
				height="150px"
				sx={{
					borderRadius: '10px',
				}}
			/>
		</Box>
	);
}

export default FeatureSkeleton;
