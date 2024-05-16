import {
	Grid, Typography, Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import MavieGauge from '../../../../../../Gauges';

function UpperBody() {
	const score = parseFloat(useSelector((state) => state.product.productData.overall.data));

	return (
		<Grid
			container
			spacing={2}
			// alignItems="center"
			// justifyContent="center"
			sx={
				{
					height: 'auto',

					// flexWrap: 'wrap',
					// justifyContent: 'end',
				}
			}
		>
			<Grid
				item
				xs={6}
				display="flex"
				alignContent="end"
			>
				<div style={{
					display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignContent: 'flex-end',
				}}
				>

					<Typography
						sx={{
							color: '#455468',
							fontFamily: 'Inter',
							fontWeight: 700,
							fontSize: ['18px', '48px', '64px'],
							marginBottom: ['10px', '20px', '20px', '25px'],
						}}
					>
						{score}
					</Typography>
					{/* <MoreDetailToggle /> */}

				</div>
			</Grid>

			<Grid
				item
				xs={6}
				display="flex"
				justifyContent="center"
				alignItems="flex-end"

			>
				<Box sx={{
					width: '80%',
				}}
				>
					<MavieGauge type="default" value={score} />
				</Box>

			</Grid>
		</Grid>
	);
}
export default UpperBody;
