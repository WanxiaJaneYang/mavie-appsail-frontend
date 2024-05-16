import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
	Accordion, Typography, AccordionSummary, AccordionDetails, Box, Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UsabilityRatingCardSkeleton from './UsabilityRatingCardSkeleton';
import UsabilityRatingCardContent from './UsabilityRatingCardContent';
import ExpandGreyIcon from '../../../../icons/ExpandGreyIcon';
import { commonCardStyles } from '../commonReportCardStyles';

function UsabilityRatingReportCard() {
	const { loading, error, data } = useSelector((state) => state.product.productData.overall);

	const getCardContentRendered = () => {
		if (loading) {
			return (
				<UsabilityRatingCardSkeleton />
			);
		}
		if (error) {
			return null;
		}
		if (data) {
			return (
				<UsabilityRatingCardContent data={data} />
			);
		}
		return null;
	};

	return (
		<Box sx={{
			width: '100%',
			...commonCardStyles,
		}}
		>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					flexWrap: 'wrap',
				}}
			>
				<Typography
					sx={{
						color: '#455468',
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
						fontSize: '18px',
						textAlign: 'start',
					}}
				>
					Usability Rating
				</Typography>
				<Divider sx={{
					marginTop: 1,
					marginBottom: 1,
				}}
				/>
				<Typography
					sx={{
						color: '#455468',
						fontFamily: 'Inter, sans-serif',
						fontWeight: 500,
						fontSize: ['12px', '12px', '14px'],
						textAlign: 'start',
						width: '60%',
					}}
				>
					An overall rating of the product based on the user’s unique characteristics.
				</Typography>

			</Box>
			{getCardContentRendered()}

		</Box>
	);
}

export default UsabilityRatingReportCard;
