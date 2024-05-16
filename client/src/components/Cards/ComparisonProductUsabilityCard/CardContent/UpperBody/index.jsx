import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import DomainGeneralSkeleton from './DomainGeneralSkeleton';
import ProductGeneralContent from './ProductGeneralContent';

function UpperBody({
	productId, importanceRatingOn,
}) {
	const { loading, error } = useSelector((state) => state.comparison.rating);

	if (loading) {
		return <DomainGeneralSkeleton />;
	}
	if (error) {
		return null;
	}
	return (
		<ProductGeneralContent productId={productId} />
	);
}

UpperBody.propTypes = {
	productId: propTypes.string.isRequired,
	importanceRatingOn: propTypes.bool.isRequired,

};

export default UpperBody;
