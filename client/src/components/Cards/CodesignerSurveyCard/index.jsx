import { useSelector, useDispatch } from 'react-redux/';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import CodesignerSurveySkeleton from './CoDesigerSkeleton';
import CoDesignerSurveyContent from './CoDesignerSurveyContent';
import { getCoDesignerSurvey } from '../../../thunk';

function CoDesignerSurveyCard() {
	const dispatch = useDispatch();
	const { currentProduct } = useSelector((state) => state.filters.product);
	const {
		loading, error, survey, currentCodesignerId,
	} = useSelector((state) => state.codesignerSurvey);
	const getContentRender = () => {
		if (loading) {
			return <CodesignerSurveySkeleton />;
		}
		if (error) {
			return null;
		}
		if (survey) {
			return <CoDesignerSurveyContent />;
		}
		return <div>No data Provided</div>;
	};

	useEffect(
		() => {
			dispatch(getCoDesignerSurvey(
				{ productId: currentProduct.id, coDesignerId: currentCodesignerId },
			));
		},
		[currentProduct.id, currentCodesignerId, dispatch],
	);
	return getContentRender();
}

export default CoDesignerSurveyCard;
