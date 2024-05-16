import {
	Card, Typography, Divider, Box, CardMedia,
} from '@mui/material';
import propType from 'prop-types';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import colors from '../../../../theme/colors';

function ComparisonProductContent({ index, productId }) {
	const {
		entities,
	} = useSelector((state) => state.comparison.productInfo);
	const [imageError, setImageError] = useState(false);
	const productInfo = entities[productId];
	const handleImageError = () => {
		setImageError(true);
	};
	const getCardHeader = () => {
		if (productInfo?.brand?.icon) {
			return (
				<img
					src={productInfo.brandIcon}
					alt={productInfo.brand}
					style={{ width: 'auto', maxHeight: '50px', objectFit: 'contain' }}
				/>
			);
		} if (productInfo?.brand) {
			return (
				<Typography sx={{
					color: '#455468',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '18px',
					textAlign: 'start',
				}}
				>
					{productInfo.brand}
				</Typography>
			);
		}
		return (
			<Typography sx={{
				color: '#455468',
				fontFamily: 'Inter, sans-serif',
				fontWeight: 600,
				fontSize: '18px',
				textAlign: 'start',
			}}
			>
				Unknown Brand
			</Typography>
		);
	};

	const getProductABC = () => {
		// 'A' for 0, 'B' for 1, 'C' for 2, etc
		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		return alphabet[index];
	};

	return (
		<Card
			elevation={0}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'start',
				// padding: '16px',
				width: '100%',
				padding: '16px',
			}}
		>
			{/* if there is a brand icon,
            display brand icon in the card header,
            otherwise dsiplay brandname */}
			<Box sx={{
				width: '100%',
				maxHeight: '50px',
				objectFit: 'contain',
			}}
			>
				{getCardHeader()}
			</Box>

			<Divider sx={{
				width: '100%',
				margin: '16px 0px 16px 0px',
				border: '1px solid #E0E0E0', // this is a string, not a variable
			}}
			/>
			<Typography sx={{
				color: '#455468',
				fontFamily: 'Inter, sans-serif',
				fontWeight: 600,
				fontSize: '18px',
				textAlign: 'start',
			}}
			>
				{`Product ${getProductABC()}`}
			</Typography>
			<Typography sx={{
				fontSize: '14px',
				fontWeight: 400,
				fontFamily: 'Inter, sans-serif',
				textAlign: 'left',
				color: colors.grey,
			}}
			>
				{productInfo?.modelName ? productInfo.modelName : 'Unknown Product Name'}
			</Typography>
			{productInfo?.productCategoryName && (
				<Typography sx={{
					fontSize: '12px',
					fontWeight: 400,
					fontFamily: 'Inter, sans-serif',
					textAlign: 'left',
					color: colors.grey,
				}}
				>
					{productInfo.productCategoryName}
				</Typography>
			)}
			{
				imageError ? (<Typography color="error">Image not found</Typography>) : (
					<CardMedia
						component="img"
						image={productInfo?.image}
						alt={productInfo?.modelName}
						sx={{
							height: 200, width: '100%', objectFit: 'contain', padding: '16px',
						}}
						onError={handleImageError}
					/>
				)
			}

		</Card>
	);
}

ComparisonProductContent.propTypes = {
	productId: propType.string.isRequired,
	index: propType.number.isRequired,
};

export default ComparisonProductContent;
