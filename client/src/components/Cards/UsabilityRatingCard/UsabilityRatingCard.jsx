import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
	Accordion, Typography, AccordionSummary, AccordionDetails, Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UsabilityRatingCardSkeleton from './UsabilityRatingCardSkeleton';
import UsabilityRatingCardContent from './UsabilityRatingCardContent';
import ExpandGreyIcon from '../../icons/ExpandGreyIcon';

function UsabilityRatingCard() {
	const { loading, error, data } = useSelector((state) => state.product.productData.overall);
	const [expanded, setExpanded] = useState('usability-header');

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : null);
	};

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
		<Accordion
			disableGutters
			defaultExpanded
			expanded={expanded === 'usability-header'}
			onChange={handleChange('usability-header')}
		>
			<AccordionSummary
				expandIcon={(
					<ExpandGreyIcon
						fontSize="large"
						sx={{ padding: '0px', width: '40px', height: '40px' }}
					/>
				)}
				aria-controls="usability-header"
				id="usability-header"
				sx={{
					padding: '16px',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						flexWrap: 'wrap',
						marginBottom: expanded === 'usability-header' ? '-20px' : '0px',
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
					{expanded === 'usability-header' && (
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
					)}
				</Box>
			</AccordionSummary>
			<AccordionDetails
				sx={{
					display: 'flex',
					flexDirection: 'column',
					marginTop: '-16px',
					paddingTop: '0px',
					paddingBottom: '0px',
				}}
			>
				{getCardContentRendered()}
			</AccordionDetails>
		</Accordion>
	);
}

export default UsabilityRatingCard;
