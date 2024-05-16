import { Typography, Skeleton, CardHeader } from '@mui/material';
import { useSelector } from 'react-redux';
import theme from '../../../../../../theme';

function ProductIntroCardHeader() {
	const { loading } = useSelector((state) => state.product.productInfo);
	const productDetail = useSelector((state) => state.product.productInfo.productDetail);

	if (loading) {
		return <Skeleton variant="text" width={150} height={40} />;
	}

	return (
		<Typography
			sx={{
				color: theme.palette.darkest,
				fontFamily: 'Inter, sans-serif',
				fontWeight: 600,
				fontSize: '18px',
				textAlign: 'start',
			}}
		>
			{productDetail?.modelName}
		</Typography>
	);
}

export default ProductIntroCardHeader;
