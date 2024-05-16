import {
	Grid, Box, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ImportanceScore from './ImportanceScore';
import ScoreRating from './ScoreRating';
import MavieGauge from '../../../Gauges';
import { getSurveyProductFeature } from '../../../../thunk';
import FeatureExplanation from './FeatureExplanation';
import WarningInfo from './WarningInfo';
import FeatureSkeleton from './FeatureSkeleton';
import FeatureDescription from './FeatureDescription';

function FeatureCardContent({ featureId, surveyProductId }) {
	const dispatch = useDispatch();
	const feature = useSelector((state) => state.feature.entities[featureId]);
	const { currentSurvey } = useSelector((state) => state.filters.survey);
	const currentFeatureId = useSelector((state) => state.product.productData
		.featureDetail.currentFeatureId);
	const featureRatings = useSelector((state) => state.comparison
		.rating.data[surveyProductId]?.featureRatings);
	const featureRating = parseFloat(featureRatings[featureId]);
	const featureImportance = parseFloat(feature?.importance);
	const {
		loading, error, percentages, explanationOn,
	} = useSelector((state) => state.featureCard);

	const warning = () => {
		// if rating is less than importance by more than 1, then show warning
		if (featureRating && featureImportance && featureRating < featureImportance - 1) {
			return true;
		}
		return false;
	};

	useEffect(
		() => {
			if (currentSurvey && surveyProductId
				&& currentFeatureId && featureRating !== 0) {
				// console.log('feature id: ', currentFeatureId, 'survey id: ', currentSurvey);
				dispatch(getSurveyProductFeature({
					surveyId: currentSurvey.id,
					featureId: currentFeatureId,
					productId: surveyProductId,
				}));
			}
		},
		[currentFeatureId, dispatch, currentSurvey, surveyProductId, featureRating],
	);

	const getImportanceRendered = () => {
		if (loading) {
			// console.log('feature score detail api loading, rendering skeleton');
			return (
				<FeatureSkeleton />
			);
		}
		if (error && featureRating !== 0) {
			// console.log('feature rating isnt 0 and error, rating is: ', featureRating);
			return null;
		}

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
	surveyProductId: PropTypes.string,
};

FeatureCardContent.defaultProps = {
	surveyProductId: null,
};
