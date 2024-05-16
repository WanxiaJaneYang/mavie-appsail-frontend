import {
	Box, Grid, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import propType from 'prop-types';
import DynamicSvgIcon from '../../../../../DynamicSvgIcon';
import MavieGauge from '../../../../../Gauges';

function DomainGeneralContent({ domainId, importanceRatingOn, productId }) {
	const domainInfo = useSelector((state) => state.domain.entities[domainId]);
	const ratingData = useSelector((state) => state.comparison.rating.data);
	let domainRating = ratingData[productId]?.domainRatings?.[domainId]?.rating;
	domainRating = parseFloat(domainRating);

	const getDomainRatingFormatted = () => {
		if (domainRating === 0) {
			return 'N/A';
		}
		return domainRating.toFixed(1);
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
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						height: '100%',
					}}
				>
					<DynamicSvgIcon
						svgData={domainInfo.roundIcon}
						sx={{
							width: ['65px', '60px', '60px'], // [mobile, tablet, desktop]
							height: ['65px', '60px', '60px'], // [mobile, tablet, desktop]
							marginTop: '-30px', // [mobile, tablet, desktop]
						}}
					/>
					{/* <div style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						// flexWrap: 'wrap',
					}}
					> */}
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
					value={domainRating}
					importance={domainInfo.importance}
				/>
			</Grid>
		</Grid>
	);
}

export default DomainGeneralContent;

DomainGeneralContent.propTypes = {
	domainId: propType.string.isRequired,
	importanceRatingOn: propType.bool.isRequired,
	productId: propType.string.isRequired,
};
