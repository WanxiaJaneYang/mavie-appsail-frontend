import {
	Grid, Typography, Box, SvgIcon,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ScoreBar from '../../../../../Ratings/ScoreBar';
import SurveyFeatureCard from '../../../../../Popup/SurveyFeatureCard';
import { setCurrentFeatureId } from '../../../../../../features/product/productData/featureScoreDetail';
import theme from '../../../../../../theme';
import WarningIcon from '../../../../../icons/WarningIcon';

function FeatureRow({
	featureId, productId, domainId, importanceRatingOn,
}) {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const features = useSelector((state) => state.feature.entities);
	const feature = features[featureId];
	const featureRatings = useSelector((state) => state.comparison
		.rating.data[productId]?.featureRatings);
	const featureRating = parseFloat(featureRatings[featureId]);
	const featureImportance = parseFloat(feature?.importance);
	if (!feature) return null;

	const handleClick = () => {
		dispatch(setCurrentFeatureId(featureId));
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const warning = () => {
		// if rating is less than importance by more than 1, then show warning
		if (featureRating && featureImportance && featureRating < featureImportance - 1) {
			return true;
		}
		return false;
	};

	const getFeatureName = () => feature.name || 'No Feature Name';

	const getFeatureRatingFromatted = () => {
		if (featureRating && featureRating !== 0) {
			return featureRating.toFixed(1);
		}
		return 'N/A';
	};

	const noRating = () => {
		if (featureRating && featureRating !== 0) {
			return false;
		}
		return true;
	};

	const cursorStyle = () => {
		// if the feature has no rating, then the cursor is not clickable
		if (featureRating && featureRating !== 0) {
			return 'pointer';
		}
		return 'default';
	};

	return (
		<Box sx={{
			paddingTop: '10px',
			paddingBottom: '10px',
		}}
		>
			<Box
				sx={
					{ width: '100%' }
				}
			>
				<Typography
					sx={{
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
						// marginLeft: '-10px',
						fontSize: ['12px', '13px', '14px'], // [mobile, tablet, desktop
						textAlign: 'left',
						color: theme.palette.primary.main,
					}}
				>
					{getFeatureName()}
				</Typography>
			</Box>
			<Grid
				container
				spacing={1}
				// gap={1}
				alignItems="center"
				sx={{
					// marginBottom: ['5px', '8px', '10px', '10px'], // [mobile, tablet, desktop
					cursor: cursorStyle(),
					justifyContent: 'space-between',
				}}
				onClick={noRating() ? null : handleClick}
			>
				<Grid item xs={9.5}>
					<ScoreBar
						score={featureRating || 0}
						importance={feature.importance || '0'}
						importanceRatingOn={importanceRatingOn}
						highlight
					/>
				</Grid>
				<Grid
					item
					xs={1.5}
					lg={1}
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-end', // Aligns content to the end
						justifyItems: 'flex-end', // Aligns content to the end
						alignItems: 'center', // Centers items vertically
					}}
				>
					{warning() && (
						<WarningIcon
							sx={{
								width: ['16px', '18px', '20px'],
								height: ['16px', '18px', '20px'],
								// marginRight: ['8px', '8px', '10px'],
							}}
						/>
					)}
				</Grid>
				<Grid
					item
					xs={0.5}
					lg={1}
					sx={{
						display: 'flex',
						justifyContent: 'flex-end', // Aligns content to the end
						alignItems: 'center', // Centers items vertically
					}}
				>

					<Typography
						sx={{
							color: '#455468',
							fontFamily: 'Inter, sans-serif',
							fontWeight: 600,
							fontSize: ['12px', '13px', '14px'],
							textAlign: 'right',
						}}
					>
						{getFeatureRatingFromatted()}
					</Typography>
				</Grid>
			</Grid>
			<SurveyFeatureCard
				open={open}
				handleCloseClick={handleClose}
				featureId={featureId}
				domainId={domainId}
				surveyProductId={productId}
			/>
		</Box>
	);
}

export default FeatureRow;

FeatureRow.propTypes = {
	productId: PropTypes.string.isRequired,
	importanceRatingOn: PropTypes.bool.isRequired,
	featureId: PropTypes.string.isRequired,
	domainId: PropTypes.string.isRequired,
};
