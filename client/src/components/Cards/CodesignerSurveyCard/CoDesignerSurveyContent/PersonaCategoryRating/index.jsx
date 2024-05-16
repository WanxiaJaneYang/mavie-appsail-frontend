import {
	Box, Grid, Tooltip, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import propType from 'prop-types';
import DynamicSvg from '../../../../DynamicSvgIcon';
import theme from '../../../../../theme';
import ScoreBar from '../../../../Ratings/ScoreBar';

function PersonaCategoryRating({ id, rating }) {
	const personaEntities = useSelector((state) => state.persona.entities);
	const persona = personaEntities[id];
	const getRatingFormatted = parseFloat(rating).toFixed(1);
	console.log('id', id);
	if (!persona) {
		return null;
	}
	console.log('persona', persona);
	return (
		<Box
			container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'start',
				alignItems: 'start',
			}}
			width="100%"
			rowGap={[0.5, 0.75, 0.5]}
		>

			<Grid
				container
				width="100%"
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
					xs={2}
					md={2}
					lg={3}
					sx={{
					}}
				>
					<DynamicSvg
						svgData={persona.icon}
						sx={{
							width: ['28x', '26px', '28px'], // [mobile, tablet, desktop
							height: ['28px', '26px', '28px'], // [mobile, tablet, desktop
							// paddingBottom: ['10px', '10px', '3px'],
							// paddingRight: ['10px', '10px', '10px'],
							marginBottom: ['0px', '0px', '5px'],
							alignItems: 'center',
							alignContent: 'center',
							display: 'flex',
						}}
					/>

				</Grid>

				<Grid
					item
					xs={10}
					md={10}
					lg={9}
					sx={{
						alignContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography
						sx={{
							fontSize: ['14px', '16px', '18px'], // [mobile, tablet, desktop]
							fontWeight: 600,
							color: theme.palette.darkest,
						}}
					>
						{persona.name}
					</Typography>
				</Grid>
			</Grid>

			<Box
				width="100%"
			>
				<ScoreBar score={getRatingFormatted} color={theme.palette.primary.light} />
				<Tooltip placement="top" title={getRatingFormatted} />
			</Box>
		</Box>
	);
}

export default PersonaCategoryRating;

PersonaCategoryRating.propTypes = {
	id: propType.string.isRequired,
	rating: propType.string.isRequired,
};
