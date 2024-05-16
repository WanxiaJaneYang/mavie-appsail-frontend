import { Typography, Skeleton, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import colors from '../../../../theme/colors';

function ProductIntroCardHeader({ expanded }) {
	const { loading } = useSelector((state) => state.product.productInfo);
	const productDetail = useSelector((state) => state.product.productInfo.productDetail);

	if (loading) {
		return <Skeleton variant="text" width={150} height={40} />;
	}

	return (
		<Box>
			<Typography
				sx={{
					color: '#455468',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '18px',
					textAlign: 'start',
				}}
			>
				{productDetail?.modelName}
			</Typography>
			{/* <Typography
				sx={{
					fontSize: '12px',
					fontWeight: 400,
					fontFamily: 'Inter, sans-serif',
					textAlign: 'left',
					color: colors.grey,
					display: expanded ? 'block' : 'none',
				}}
			>
				{productDetail?.productCategoryName}

			</Typography> */}
		</Box>
	);
}

export default ProductIntroCardHeader;

ProductIntroCardHeader.propTypes = {
	expanded: PropTypes.bool.isRequired,
};
