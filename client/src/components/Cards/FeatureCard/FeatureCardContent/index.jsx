import {
	Grid, Box, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ImportanceScore from './ImportanceScore';
import ScoreRating from './ScoreRating';
import MavieGauge from '../../../Gauges';
import { getProductFeature } from '../../../../thunk';
import FeatureExplanation from './FeatureExplanation';
import WarningInfo from './WarningInfo';
import FeatureSkeleton from './FeatureSkeleton';
import FeatureDescription from './FeatureDescription';

function FeatureCardContent({ featureId }) {
	const dispatch = useDispatch();
	const feature = useSelector((state) => state.feature.entities[featureId]);
	const explanationOn = useSelector((state) => state.featureCard.explanationOn);
	const currentProductId = useSelector((state) => state.filters.product.currentProduct.id);
	const currentFeatureId = useSelector((state) => state.product.productData
		.featureDetail.currentFeatureId);
	const featureRating = parseFloat(useSelector((state) => state.product.productData
		.features.data[featureId]));
	const featureImportance = parseFloat(feature?.importance);
	const featureDetailLoading = useSelector((state) => state.product.productData
		.featureDetail.loading);
	const featureDetailError = useSelector((state) => state.product.productData
		.featureDetail.error);
	const percentages = useSelector((state) => state.product
		.productData.featureDetail.questionImportance);

	const warning = () => {
		// if rating is less than importance by more than 1, then show warning
		if (featureRating && featureImportance && featureRating < featureImportance - 1) {
			return true;
		}
		return false;
	};

	useEffect(
		() => {
			// console.log('feature score detail api called, feature id: ', currentFeatureId);
			// console.log('feature score detail api called, product id: ', currentProductId);
			if (currentProductId && currentFeatureId && featureRating !== 0) {
				// console.log('feature id: ', currentFeatureId, 'product id: ', currentProductId);
				dispatch(getProductFeature({
					productId: currentProductId,
					featureId: currentFeatureId,
				}));
			}
		},
		[currentFeatureId, dispatch, currentProductId, featureRating],
	);

	const getImportanceRendered = () => {
		if (featureDetailLoading) {
			// console.log('feature score detail api loading, rendering skeleton');
			return (
				<FeatureSkeleton />
			);
		}
		if (featureDetailError && featureRating !== 0) {
			// console.log('feature rating isnt 0 and error, rating is: ', featureRating);
			return null;
		}
		if (featureRating === 0 && !featureDetailLoading && featureDetailError) {
			// console.log('feature score 0, special case');
			return (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center', // Center the gauge horizontally
						alignItems: 'center', // Center the gauge vertically
						width: '95%',
					}}
				>
					<MavieGauge
						type="placeholder"
					/>
				</Box>
			);
		}
		if (featureRating !== 0 && !featureDetailLoading && !featureDetailError) {
			return (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center', // Center the gauge horizontally
						alignItems: 'center', // Center the gauge vertically
						width: '95%',
					}}
				>
					<MavieGauge
						type="percentage"
						value={featureRating}
						importance={featureImportance}
						percentages={percentages || [0.2, 0.2, 0.2, 0.2, 0.2]}
					/>
				</Box>
			);
		}
		return null;
	};

	return (
		<>
			<Grid
				container
				spacing={1}
				marginTop={0}
				alignItems="center"
				paddingLeft={2}
				paddingRight={2}
				paddingTop={0}
			>
				<Grid
					item
					xs={5}
					sm={4}
					md={6}
					sx={{
						display: 'flex',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',

						}}
					>
						<FeatureDescription description={feature?.description || ''} />
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'start', // Align the content horizontally
								justifyContent: 'end', // Center the content vertically if needed
							}}
						>
							<ScoreRating score={featureRating} />
							<ImportanceScore score={feature?.importance} />
							{warning() && <WarningInfo />}
						</Box>
					</Box>
				</Grid>
				<Grid item xs={7} sm={8} md={6} lg={6}>
					{getImportanceRendered()}
				</Grid>
			</Grid>
			{explanationOn && <FeatureExplanation />}
		</>
	);
}

export default FeatureCardContent;

FeatureCardContent.propTypes = {
	featureId: PropTypes.string.isRequired,
};
