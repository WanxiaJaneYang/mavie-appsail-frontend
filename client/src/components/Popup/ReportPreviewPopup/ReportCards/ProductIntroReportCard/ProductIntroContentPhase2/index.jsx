import {
	Box, Card, CardMedia, Grid, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import MavieURating from '../../../../../Ratings/MavieURating';
import colors from '../../../../../../theme/colors';
import productPlaceHolder from '../../../../../../images/productPlaceHolder.png';

function ProductIntroContent() {
	const productDetail = useSelector((state) => state.product.productInfo
		.productDetail);
	const productRating = parseFloat(useSelector((state) => state.product.productData.overall.data));

	const { productImage, description } = productDetail;

	const getProductDescription = () => {
		if (description) {
			return description;
		}
		return 'No description Available';
	};

	const getProductImage = () => {
		// console.log('productImg:', productImage);
		if (productImage) {
			return productImage;
		}
		return productPlaceHolder;
	};

	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				border: 'none',
				width: '100%',
				overflow: 'visible',
			}}
			elevation={0}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignContent: 'start',
					alignItems: 'start',
					justifyContent: 'space-between',
					gap: '16px',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'start',
						justifyContent: 'center',
					}}
					width="30%"
					height="auto"
				>
					<Typography
						sx={{
							fontSize: '12px',
							fontWeight: 400,
							fontFamily: 'Inter, sans-serif',
							textAlign: 'left',
							color: colors.grey,
							marginBottom: '16px',
						}}
					>
						{productDetail?.productCategoryName}

					</Typography>

					<MavieURating
						rating={productRating || 0}
						readOnly
						sx={{
							width: '80%',
							height: 'auto',
							justifyContent: 'center',
						}}
					/>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'start',
						justifyContent: 'center',
					}}
					width="40%"

				>
					<Typography
						sx={{
							fontSize: '12px',
							fontWeight: 600,
							fontFamily: 'Inter, sans-serif',
							textAlign: 'left',
							marginBottom: '16px',
						}}
					>
						Description
					</Typography>
					<Typography
						sx={{
							fontSize: '12px',
							fontWeight: 400,
							fontFamily: 'Inter, sans-serif',
						}}
					>
						{getProductDescription()}
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'flex-start',
						justifyContent: 'flex-end',
					}}
					width="33%"
					overflow="visible"
				>
					<CardMedia
						component="img"
						image={getProductImage()}
						title={productDetail?.productModalName}
						sx={{
							width: '100%',
							borderRadius: '8px',
							marginTop: '-16px',
							// marginLeft: 'auto',
						}}
					/>
				</Box>
			</Box>
		</Card>
	);
}

export default ProductIntroContent;
