import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box } from '@mui/material';
import ComparisonProductUsabilityCard from '../../components/Cards/ComparisonProductUsabilityCard';
import SelectedDomainCards from './SelectedDomainCards';
import { getSurveyProductRating } from '../../thunk';

function MultipleProductMetricPage() {
	const dispatch = useDispatch();
	const { surveyId } = useParams();
	const { selectedRelatedProductIds } = useSelector((state) => state.filters.survey);

	useEffect(
		() => {
			if (surveyId && selectedRelatedProductIds?.length > 0) {
				dispatch(getSurveyProductRating({
					surveyId,
					productIds: selectedRelatedProductIds,
				}));
			}
		},
		[surveyId, dispatch, selectedRelatedProductIds],
	);
	const getGridSize = () => {
		if (selectedRelatedProductIds?.length === 1) {
			return 12;
		}
		if (selectedRelatedProductIds?.length === 2) {
			return 6;
		}
		return 4;
	};
	return (
		<Box>
			<Grid container spacing={2} padding="16px">
				{selectedRelatedProductIds?.map((id) => (
					<Grid item xs={getGridSize()} key={`${id}-introCard-Grid`}>
						<ComparisonProductUsabilityCard key={`${id}-introCard`} productId={id} />
					</Grid>
				))}
			</Grid>
			<Grid container spacing={2} padding="16px">
				{selectedRelatedProductIds?.map((id) => (
					<Grid item xs={getGridSize()} key={`${id}-introCard-Grid`}>
						<SelectedDomainCards productId={id} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default MultipleProductMetricPage;
