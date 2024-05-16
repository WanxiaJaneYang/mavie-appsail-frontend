import PropTypes from 'prop-types';
import {
	Box, Skeleton, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import FeatureRow from './FeatureRow';
import FeatureListHeight from './FeatureListHeight';

function FeatureList({ domainId, importanceRatingOn }) {
	const featureIds = useSelector((state) => state.domain.entities[domainId].featureIds);
	const { loading, error, entities } = useSelector((state) => state.feature);
	const featureRatings =	useSelector((state) => state
		.product.productData.features.data);

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
		if (!error && entities && entities[featureId]) {
			const featureRating = parseFloat(featureRatings[featureId]);
			if (featureRating && featureRating !== 0) {
				return (
					<FeatureRow
						key={`${featureId}-feature-row`}
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
					// height: '150px',
					height: `${FeatureListHeight()}px`,
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
};

export default FeatureList;
