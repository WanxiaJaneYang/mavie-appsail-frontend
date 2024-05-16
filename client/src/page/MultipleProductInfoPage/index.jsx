import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box } from '@mui/material';
import { getSurveyProductInfo } from '../../thunk';
import ComparisonProductIntroCard from '../../components/Cards/ComparisonProductIntroCard';

function MultipleProductInfoPage() {
	const dispatch = useDispatch();
	const { surveyId } = useParams();
	const {
		selectedRelatedProductIds,
	} = useSelector((state) => state.filters.survey);
	useEffect(
		() => {
			if (surveyId && selectedRelatedProductIds?.length > 0) {
				dispatch(getSurveyProductInfo({
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
				{selectedRelatedProductIds?.map((id, index) => (
					<Grid item xs={getGridSize()} key={`${id}-introCard-Grid`}>
						<ComparisonProductIntroCard key={`${id}-introCard`} index={index} productId={id} />
					</Grid>
				))}
			</Grid>
			<Outlet />
		</Box>
	);
}

export default MultipleProductInfoPage;
