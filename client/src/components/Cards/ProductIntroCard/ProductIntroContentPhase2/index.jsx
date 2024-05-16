import {
	Box, Card, CardMedia, Grid, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import MavieURating from '../../../Ratings/MavieURating';
import colors from '../../../../theme/colors';
import productPlaceHolder from '../../../../images/productPlaceHolder.png';

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
				paddingRight: '16px',
				// marginTop: '-16px',
			}}
			elevation={0}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'start',
					justifyContent: { xs: 'space-between', sm: 'flex-start' },
					// paddingLeft: '16px',
					paddingBottom: '16px',
					paddingRight: '16px',
					gap: ['0px', '0px', '16px'],
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'start',
						justifyContent: 'center',
					}}
					width={['20%', '33%', '20%']}
					height={['auto', 'auto', 'auto']}
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
							width: '95%',
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
					width={['33%', '33%', '60%']}

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
						// display: { xs: 'none', md: 'block' },
					}}
					width={['33%', '33%', '20%']}
				>
					<CardMedia
						component="img"
						image={getProductImage()}
						title={productDetail?.productModalName}
						sx={{
							width: '95%',
							borderRadius: '8px',
							// marginLeft: 'auto',
						}}
					/>
				</Box>
			</Box>
		</Card>
	);
}

export default ProductIntroContent;
