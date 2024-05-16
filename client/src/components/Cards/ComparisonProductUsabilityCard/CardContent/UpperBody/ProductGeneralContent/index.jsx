import {
	Box, Grid, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import propType from 'prop-types';
import MavieGauge from '../../../../../Gauges';

function ProductGeneralContent({ productId }) {
	const ratingData = useSelector((state) => state.comparison.rating.data);
	let productRating = ratingData[productId]?.overallRating;
	productRating = parseFloat(productRating);

	const getDomainRatingFormatted = () => {
		if (productRating === 0) {
			return 'N/A';
		}
		return productRating.toFixed(1);
	};
	return (
		<Grid container spacing={2} justifyContent="space-between">
			<Grid
				item
				xs={5}
				sm={4}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'flex-end',
						flexWrap: 'wrap',
						height: '100%',
					}}
				>
					<Typography
						sx={{
							color: '#455468',
							fontFamily: 'Inter, sans-serif',
							fontWeight: 600,
							fontSize: ['36px', '38px', '32px'],
							textAlign: 'center',
							// marginBottom: ['5px', '5px', '5px'],
						}}
					>
						{getDomainRatingFormatted()}
					</Typography>

					{/* </div> */}

				</Box>
			</Grid>
			<Grid
				item
				xs={7}
				sm={8}
				sx={{
					width: '100%',
					display: 'flex',
					alignItems: 'flex-end',
					alignContent: 'flex-end',
				}}
			>

				<MavieGauge
					type="default"
					value={productRating}
				/>
			</Grid>
		</Grid>
	);
}

export default ProductGeneralContent;

ProductGeneralContent.propTypes = {
	productId: propType.string.isRequired,
};
