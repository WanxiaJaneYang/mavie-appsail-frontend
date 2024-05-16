import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import DomainGeneralSkeleton from './DomainGeneralSkeleton';
import DomainGeneralContent from './DomainGeneralContent';

function DomainGeneral({
	domainId, importanceRatingOn, productId,
}) {
	const { loading, error, data } = useSelector((state) => state.comparison.rating);

	if (loading) {
		return <DomainGeneralSkeleton />;
	}
	if (error) {
		return null;
	}
	if (data[productId]?.domainRatings?.[domainId]?.rating) {
		return (
			<DomainGeneralContent
				domainId={domainId}
				importanceRatingOn={importanceRatingOn}
				productId={productId}
			/>
		);
	}

	return null;
}

DomainGeneral.propTypes = {
	domainId: propTypes.string.isRequired,
	importanceRatingOn: propTypes.bool.isRequired,
	productId: propTypes.string.isRequired,

};

export default DomainGeneral;
