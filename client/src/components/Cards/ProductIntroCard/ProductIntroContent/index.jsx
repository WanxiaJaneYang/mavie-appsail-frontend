import {
	Box, Card, CardMedia, Grid, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import MavieRating from '../../../MavieRating';
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
				// display: 'flex',
				// flexDirection: 'row',
				// padding: '0px',
				// paddingTop: '0px',
				// marginTop: '0px',
				// width: '100%',
				border: 'none',
			}}
			elevation={0}
		>
			<Grid
				container
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'start',
					justifyContent: 'space-between',
					marginBottom: '16px',
					paddingRight: '16px',
					// gap: '16px',
				}}
				spacing={1}
			>
				<Grid
					item
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'start',
						justifyContent: 'center',
						marginBottom: '16px',
					}}
					xs={12}
					md={8}
				>
					<Box sx={{ display: { xs: 'block', md: 'none' } }}>
						<CardMedia
							component="img"
							image={getProductImage()}
							title={productDetail?.productModalName}
							sx={{
								width: '80%',
								height: 'auto',
								borderRadius: '8px',
								marginBottom: '16px',
							}}
						/>
					</Box>
					<MavieRating
						value={productRating || 0}
						readOnly
						sx={{
							marginBottom: '16px',
						}}
					/>
					<Typography
						sx={{
							fontSize: '12px',
							fontWeight: 600,
							fontFamily: 'Inter, sans-serif',
							textAlign: 'left',
							marginBottom: '8px',
						}}
					>
						Description
					</Typography>
					<Typography
						sx={{
							fontSize: '12px',
							fontWeight: 400,
							fontFamily: 'Inter, sans-serif',
							textAlign: 'left',
							marginBottom: '16px',
						}}
					>
						{getProductDescription()}
					</Typography>
				</Grid>
				<Grid
					item
					xs={0}
					md={4}
					sx={{
						display: { xs: 'none', md: 'block' },
						alignSelf: 'flex-end',
					}}
				>
					<CardMedia
						component="img"
						image={getProductImage()}
						title={productDetail?.productModalName}
						sx={{
							width: '155px',
							height: '155px',
							borderRadius: '8px',
							marginLeft: 'auto',
						}}
					/>
				</Grid>
			</Grid>
		</Card>
	);
}

export default ProductIntroContent;
