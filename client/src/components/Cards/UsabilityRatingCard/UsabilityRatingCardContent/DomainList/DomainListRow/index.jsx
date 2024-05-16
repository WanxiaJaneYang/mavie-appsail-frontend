import { useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import propType from 'prop-types';
import ScoreBar from '../../../../../Ratings/ScoreBar';
import DynamicSvg from '../../../../../DynamicSvgIcon';
import theme from '../../../../../../theme';

function DomainListRow({ domainId }) {
	const domains = useSelector((state) => state.domain.entities);
	const domainRating = parseFloat(useSelector((state) => state.product.productData.domain
		?.data[domainId]?.rating));
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
					// marginTop: ['15px', '15px', '40px'],
					alignContent: 'center',
					alignItems: 'center',
				}}
			>
				<DynamicSvg
					svgData={domain.icon}
					sx={{
						width: ['20x', '26px', '30px'], // [mobile, tablet, desktop
						height: ['20px', '26px', '30px'], // [mobile, tablet, desktop
						// paddingBottom: ['10px', '10px', '3px'],
						// paddingRight: ['10px', '10px', '10px'],
						marginBottom: ['0px', '0px', '5px'],
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

export default DomainListRow;

DomainListRow.propTypes = {
	domainId: propType.string.isRequired,
};
