import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import ProductDomainCard from '../../../components/Cards/ProductDomainCard';

function SelectedDomainCards({ productId }) {
	const domainIds = useSelector((state) => state.domain.ids);
	const selectedDomain = useSelector((state) => state.filters.domain);

	return (
		<Box sx={{
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		}}
		>
			{domainIds && domainIds.map((id) => (
				selectedDomain[id]
					&& (
						<Box width="100%">
							<ProductDomainCard
								productId={productId}
								domainId={id}
								key={`${id}-domain`}
							/>
						</Box>
					)
			))}
		</Box>
	);
}

export default SelectedDomainCards;

SelectedDomainCards.propTypes = {
	productId: PropTypes.string.isRequired,
};
