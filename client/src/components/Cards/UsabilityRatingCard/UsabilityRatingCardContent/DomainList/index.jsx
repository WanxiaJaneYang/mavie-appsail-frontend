import {
	Box, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import DomainListRow from './DomainListRow';
import DomainListSkeleton from './DomainListSkeleton';

function DomainList() {
	const domainIds = useSelector((state) => state.domain.ids);
	const { loading, error } = useSelector((state) => state.product.productData.domain);
	const domainRatings = useSelector((state) => state.product.productData.domain.data);
	const getDomainScoreRows = () => domainIds.map((domainId) => {
		const domainRating = parseFloat(domainRatings[domainId]?.rating);
		const render = domainRating && domainRating !== 0;
		return (
			render && (
				<DomainListRow domainId={domainId} key={`${domainId}-domain-row`} />
			)
		);
	});

	const getDomainListRendered = () => {
		if (loading) {
			return (
				<DomainListSkeleton />
			);
		}
		if (error) {
			return null;
		}
		if (domainIds && domainIds.length > 0 && !loading && !error) {
			return (
				<>
					{getDomainScoreRows()}
				</>
			);
		}
		return null;
	};

	return (
		<>
			<Typography
				sx={{
					color: '#455468',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '16px',
					// textAlign: 'left',
					marginBottom: ['0px', '5px', '10px'], // [mobile, tablet, desktop
				}}
			>
				Domains
			</Typography>
			<Box
				// overflow="auto"
				sx={{
					// height: '150px',
					width: '100%',
					paddingRight: ['8px', '8px', '16px'], // [mobile, tablet, desktop
					paddingLeft: ['8px', '8px', '16px'],
				}}
			>
				{getDomainListRendered()}
			</Box>

		</>
	);
}

export default DomainList;
