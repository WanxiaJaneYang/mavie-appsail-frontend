import {
	Box, Grid, Typography, useMediaQuery,
} from '@mui/material';
import { useSelector } from 'react-redux';
import propType from 'prop-types';
import DynamicSvgIcon from '../../../../../DynamicSvgIcon';
import MavieGauge from '../../../../../Gauges';
import WarningInfo from './WarningInfo';

function DomainGeneralContent({ domainId, importanceRatingOn }) {
	const domainInfo = useSelector((state) => state.domain.entities[domainId]);
	const domainRatingData = useSelector((state) => state.product.productData
		.domain.data);
	let domainRating = domainRatingData ? domainRatingData[domainId]?.rating : null;
	domainRating = parseFloat(domainRating);
	const isSmallScreen = useMediaQuery('(min-width:600px)');
	const isMediumScreen = useMediaQuery('(min-width:900px)');
	const isLargeScreen = useMediaQuery('(min-width:1200px)');
	const isExtraLargeScreen = useMediaQuery('(min-width:1536px)');
	const gaugeSize = () => {
		if (isExtraLargeScreen) return 1.5;
		if (isLargeScreen) return 1.2;
		if (isMediumScreen) return 1;
		if (isSmallScreen) return 1;
		return 1.2;
	};
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
							width: ['40px', '50px', '60px'], // [mobile, tablet, desktop]
							height: ['40px', '50px', '60px'], // [mobile, tablet, desktop]
							marginTop: '-10px',
						}}
					/>
					<div style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						// flexWrap: 'wrap',
					}}
					>
						<Typography
							sx={{
								color: '#000000',
								fontFamily: 'Inter, sans-serif',
								fontWeight: 600,
								fontSize: ['18px', '28px', '24px'],
								textAlign: 'center',
							}}
						>
							{getDomainRatingFormatted()}
						</Typography>
						{domainRating < domainInfo.min && (
							<WarningInfo />
						)}
					</div>

				</Box>
			</Grid>
			<Grid item xs={7} sm={8}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '0px',
					}}
				>
					<MavieGauge
						type="threshold"
						value={domainRating}
						size={gaugeSize()}
						importance={domainInfo.importance}
						threshold={domainInfo.min ? domainInfo.min : 0}
					/>
				</Box>
			</Grid>
		</Grid>
	);
}

export default DomainGeneralContent;

DomainGeneralContent.propTypes = {
	domainId: propType.string.isRequired,
	importanceRatingOn: propType.bool.isRequired,
};
