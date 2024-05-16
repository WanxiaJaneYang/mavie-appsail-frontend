import PropTypes from 'prop-types';
import {
	Box, Skeleton, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import FeatureRow from './FeatureRow';

function FeatureList({ domainId, importanceRatingOn, productId }) {
	const featureIds = useSelector((state) => state.domain.entities[domainId].featureIds);
	const { loading, error } = useSelector((state) => state.comparison.rating);
	const ratings =	useSelector((state) => state.comparison.rating.data);
	const featureRatings = ratings[productId]?.featureRatings;

	const getFeatureRowRendered = (featureId) => {
		if (error) {
			return null;
		}
		if (loading) {
			return (
				<Skeleton
					key={`${featureId}-feature-row`}
					variant="rectangular"
					width="100%"
					height={20}
					sx={{ margin: '5px' }}
				/>
			);
		}
		if (!error && featureRatings && featureRatings[featureId]) {
			const featureRating = parseFloat(featureRatings[featureId]);
			if (featureRating && featureRating !== 0) {
				return (
					<FeatureRow
						key={`${featureId}-feature-row`}
						productId={productId}
						domainId={domainId}
						featureId={featureId}
						importanceRatingOn={importanceRatingOn}
					/>
				);
			}
		}

		return null;
	};

	const getFeatureScoreRows = () => featureIds && featureIds.map((featureId) => (
		getFeatureRowRendered(featureId)
	));

	return (
		<Box
			sx={{ height: '100%' }}
		>
			<Typography
				sx={{
					color: '#455468',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '16px',
					textAlign: 'left',
					marginBottom: ['0px', '5px', '10px'], // [mobile, tablet, desktop
				}}
			>
				Features
			</Typography>
			<Box
				// overflow="auto"
				sx={{
					height: 'auto',
					width: '100%',
					paddingRight: '8px',
					paddingLeft: '8px',
				}}
			>
				{getFeatureScoreRows()}
			</Box>

		</Box>
	);
}

FeatureList.propTypes = {
	domainId: PropTypes.string.isRequired,
	importanceRatingOn: PropTypes.bool.isRequired,
	productId: PropTypes.string.isRequired,
};

export default FeatureList;
