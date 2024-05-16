import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UsabilityRatingCard from '../../components/Cards/UsabilityRatingCard/UsabilityRatingCard';
import SelectedDomainCards from './SelectedDomainCards';
import { getProductRating } from '../../thunk';

function ProductMetricPage() {
	const dispatch = useDispatch();
	const { productId } = useParams();

	useEffect(
		() => {
			dispatch(getProductRating(productId));
		},
		[productId, dispatch],
	);

	return (
		<Box
			sx={{
				width: '100%',
				height: 'auto',
				justifyContent: 'start',
				gap: '16px',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<UsabilityRatingCard />
			<Typography
				sx={{
					color: '#455468',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '18px',
					textAlign: 'left',

				}}
			>
				Domains
			</Typography>
			<SelectedDomainCards />
		</Box>

	);
}
export default ProductMetricPage;
