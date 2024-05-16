import {
	Typography,
} from '@mui/material';
import propType from 'prop-types';
import { useSelector } from 'react-redux';
import ComparisonProductIntroSkeleton from './ComparisonProductIntroSkeleton';
import ComparisonProductContent from './ComparisonProductContent';

function ComparisonProductIntroCard({ index, productId }) {
	const { loading, error, ids } = useSelector((state) => state.comparison.productInfo);
	if (loading) {
		return <ComparisonProductIntroSkeleton />;
	}
	if (error) {
		return <Typography color="error">{error}</Typography>;
	}
	if (ids?.length === 0) {
		return <Typography color="error">No data available</Typography>;
	}
	return <ComparisonProductContent index={index} productId={productId} />;
}

export default ComparisonProductIntroCard;

ComparisonProductIntroCard.propTypes = {
	index: propType.number.isRequired,
	productId: propType.string.isRequired,
};
