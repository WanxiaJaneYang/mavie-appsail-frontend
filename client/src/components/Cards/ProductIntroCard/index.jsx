import { useSelector } from 'react-redux';
import {
	Typography,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useState } from 'react';
import ExpandGrey from '../../../images/svg/ExpandGrey.svg';
import colors from '../../../theme/colors';
import ProductIntroSkeleton from './ProductIntroSkeleton';
import ProductIntroContent from './ProductIntroContentPhase2';
import ProductIntroCardHeader from './ProductIntroCardHeader';
import ExpandGreyIcon from '../../icons/ExpandGreyIcon';

function ProductIntroCard() {
	const { loading, error } = useSelector((state) => state.product.productInfo);
	const productDetail = useSelector((state) => state.product.productInfo
		.productDetail);
	const [expanded, setExpanded] = useState('product-intro-header');
	const getSummaryPaddingBottom = () => {
		if (expanded === 'product-intro-header') {
			return '0px';
		}
		return '16px';
	};

	const renderProductIntroContent = () => {
		if (error) {
			return null;
		}
		if (loading) {
			return <ProductIntroSkeleton />;
		}
		if (productDetail) {
			return <ProductIntroContent />;
		}

		return <Typography>No product info</Typography>;
	};

	return (
		<Accordion
			defaultExpanded
			disableGutters
			expanded={expanded === 'product-intro-header'}
			onChange={
				(event, isExpanded) => setExpanded(isExpanded ? 'product-intro-header' : null)
			}
		>
			<AccordionSummary
				expandIcon={(
					<ExpandGreyIcon
						fontSize="large"
						sx={{
							padding: '0px',
							width: ['40px', '40px', '36px'],
							height: ['40px', '40px', '36px'],
						}}

					/>
				)}
				aria-controls="product-intro-header"
				id="product-intro-header"
				sx={{
					backgroundColor: colors.white,
					paddingTop: '16px',
					paddingLeft: '16px',
					paddingRight: '16px',
					paddingBottom: { getSummaryPaddingBottom },
				}}
			>
				<ProductIntroCardHeader
					expanded={expanded === 'product-intro-header'}
				/>
			</AccordionSummary>
			<AccordionDetails
				sx={
					{
						display: 'flex',
						flexDirection: 'column',
						paddingTop: '0px',
						// paddingBottom: '0px',
					}
				}
			>
				{renderProductIntroContent()}
			</AccordionDetails>

		</Accordion>
	);
}

export default ProductIntroCard;
