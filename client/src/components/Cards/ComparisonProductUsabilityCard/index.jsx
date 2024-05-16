import PropTypes from 'prop-types';
import {
	Card, Typography,
} from '@mui/material';
import Content from './CardContent';

function ComparisonProductUsabilityCard({ productId }) {
	return (
		<Card
			elevation={0}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'start',
				width: '100%',
				padding: '16px',
			}}
		>
			<Typography sx={{
				color: '#455468',
				fontFamily: 'Inter, sans-serif',
				fontWeight: 600,
				fontSize: '18px',
				textAlign: 'start',
				paddingBottom: '16px',
			}}
			>
				Usability Rating
			</Typography>

			<Content productId={productId} />

		</Card>
	);
}

ComparisonProductUsabilityCard.propTypes = {
	productId: PropTypes.string.isRequired,
};

export default ComparisonProductUsabilityCard;
