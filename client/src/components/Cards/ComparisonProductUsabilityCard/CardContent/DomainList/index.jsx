import PropTypes from 'prop-types';
import {
	Box, Skeleton, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import DomainRow from './DomainRow/index';

function DomainList({ productId }) {
	const domainIds = useSelector((state) => state.domain.ids);
	const domainIdsLength = domainIds?.length;
	const { loading, error, data } = useSelector((state) => state.comparison.rating);

	const getdomainRowRendered = (domainId) => {
		if (error) {
			return null;
		}
		if (loading) {
			return (
				<Skeleton
					key={`${domainId}-domain-row`}
					variant="rectangular"
					width="100%"
					height="90%"
					sx={{ margin: '5px' }}
				/>
			);
		}
		if (!error && data) {
			const domainRating = parseFloat(data[productId]?.domainRatings?.[domainId]?.rating);
			if (domainRating && domainRating !== 0) {
				return (
					<DomainRow
						key={`${domainId}-domain-row`}
						domainId={domainId}
						productId={productId}
					/>
				);
			}
		}

		return null;
	};

	const getdomainScoreRows = () => domainIds && domainIds.map((domainId) => (
		getdomainRowRendered(domainId)
	));

	return (
		<Box
			sx={{ height: '100%' }}
		>
			<Typography
				sx={{
					color: '#455468',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '16px',
					textAlign: 'left',
					marginBottom: ['0px', '5px', '10px'], // [mobile, tablet, desktop
				}}
			>
				domains
			</Typography>
			<Box
				// overflow="auto"
				sx={{
					// height: '150px',
					height: 'auto',
					width: '100%',
					paddingRight: '8px',
					paddingLeft: '8px',
				}}
			>
				{getdomainScoreRows()}
			</Box>

		</Box>
	);
}

DomainList.propTypes = {
	productId: PropTypes.string.isRequired,
};

export default DomainList;
