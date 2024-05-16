import { useSelector } from 'react-redux';
import {
	Box, Typography,
} from '@mui/material';
import { useState } from 'react';
import ExpandGrey from '../../../../../images/svg/ExpandGrey.svg';
import colors from '../../../../../theme/colors';
import ProductIntroSkeleton from './ProductIntroSkeleton';
import ProductIntroContent from './ProductIntroContentPhase2';
import ProductIntroCardHeader from './ProductIntroCardHeader';
import { commonCardStyles } from '../commonReportCardStyles';
import ExpandGreyIcon from '../../../../icons/ExpandGreyIcon';

function ProductIntroReportCard() {
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
		<Box
			sx={{
				width: '100%',
				...commonCardStyles,
			}}
		>
			<ProductIntroCardHeader />
			{renderProductIntroContent()}

		</Box>
	);
}

export default ProductIntroReportCard;
