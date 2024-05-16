import { useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import propType from 'prop-types';
import ScoreBar from '../../../../../Ratings/ScoreBar';
import DynamicSvg from '../../../../../DynamicSvgIcon';
import theme from '../../../../../../theme';

function DomainRow({ domainId, productId }) {
	const domains = useSelector((state) => state.domain.entities);
	const ratingData = useSelector((state) => state.comparison.rating.data);
	let domainRating = ratingData[productId]?.domainRatings?.[domainId]?.rating;
	domainRating = parseFloat(domainRating);
	const domain = domains[domainId];
	const expertOpinionOn = useSelector((state) => state.filters.toggle.expertOpinionsOn);
	const getDomainRatingFormatted = () => domainRating.toFixed(1);

	if (!domain) return null;

	return (
		<Grid
			container
			spacing={1}
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'start',
				alignItems: 'center',
				alignContent: 'center',
			}}
		>
			<Grid
				item
				xs={1}
				md={1.5}
				sx={{
					display: 'flex',
					alignContent: 'center',
					alignItems: 'flex-start',
					justifyContent: 'center',
					objectFit: 'contain',
				}}
			>
				<img
					src={domain.icon}
					alt={domain.name}
					style={{
						width: 'auto',
						maxHeight: '30px',
						objectFit: 'contain',
					}}
				/>
			</Grid>
			<Grid
				item
				xs={11}
				md={10.5}
			>
				<Grid
					container
					spacing={1}
					alignItems="center"
					sx={{
						marginBottom: ['5px', '5px', '10px'], // [mobile, tablet, desktop
						flexDirection: 'row',
						justifyContent: 'space-between',
						width: '100%',

					}}
				>
					<Grid item xs={12} sx={{ marginTop: ['10px', '10px', 'auto'] }}>

						<Typography
							sx={{
								fontFamily: 'Inter, sans-serif',
								fontWeight: 600,
								fontSize: ['10px', '12px', '14px'], // [mobile, tablet, desktop
								textAlign: 'left',
								color: theme.palette.primary.main,
							}}
						>
							{domain.name}
						</Typography>

					</Grid>

					<Grid item xs={8} lg={expertOpinionOn ? 8 : 7} marginTop="-5px">
						<ScoreBar
							score={domainRating || 0}
							sx={{
								paddingLeft: '10px',
							}}
							highlight
						/>
					</Grid>
					<Grid item xs={4} lg={expertOpinionOn ? 4 : 1} marginTop="-5px">
						<Typography
							sx={{
								color: '#455468',
								fontFamily: 'Inter, sans-serif',
								fontWeight: 600,
								fontSize: '14px',
								textAlign: 'right',
							}}
						>
							{getDomainRatingFormatted()}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>

	);
}

export default DomainRow;

DomainRow.propTypes = {
	domainId: propType.string.isRequired,
	productId: propType.string.isRequired,
};
