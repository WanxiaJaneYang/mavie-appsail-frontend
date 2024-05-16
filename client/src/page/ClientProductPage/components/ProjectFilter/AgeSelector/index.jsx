import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, TextField, Slider } from '@mui/material';
import { setMinAge, setMaxAge } from '../../../../../features/filters/ageFilterSlice';
import theme from '../../../../../theme';

function AgeSelector() {
	const dispatch = useDispatch();
	const minAge = useSelector((state) => state.filters.age.minAge);
	const maxAge = useSelector((state) => state.filters.age.maxAge);
	const handleChange = (event, newValue) => {
		dispatch(setMinAge(newValue[0]));
		dispatch(setMaxAge(newValue[1]));
	};

	const valuetext = (value) => `${value}`;

	const handleMinAgeChange = (event) => {
		dispatch(setMinAge(event.target.value));
	};

	const handleMaxAgeChange = (event) => {
		dispatch(setMaxAge(event.target.value));
	};

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
			}}
			// marginLeft={1}
			gap={1}
		>
			<Typography
				sx={{
					fontFamily: 'Inter, sans-serif',
					fontWeight: '400',
					fontSize: '14px',
					color: theme.palette.dark,
					textAlign: 'left',
					marginBottom: '10px',
				}}
			>
				Age range
			</Typography>
			<Grid
				container
				spacing={2}
				alignItems="center"
				justifyContent="space-between"
				sx={{
					marginRight: '0px',
					marginLeft: '0px',
					width: '100%',
				}}
			>
				<TextField
					value={minAge}
					onChange={handleMinAgeChange}
					size="small"
					sx={{
						textAlign: 'center',
						marginTop: '10px',
						marginBottom: '10px',
						paddingTop: '10px',
						width: '20%',
						'& input': {
							padding: '3px',
							textAlign: 'center',
						},
						height: '50%',
					}}
				/>
				<TextField
					value={maxAge}
					onChange={handleMaxAgeChange}
					size="small"
					sx={{
						textAlign: 'center',
						marginTop: '10px',
						marginBottom: '10px',
						width: '20%',
						height: '50%',
						paddingTop: '10px',
						'& input': {
							padding: '3px',
							textAlign: 'center',
						},
					}}
				/>
			</Grid>
			<div style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
			}}
			>
				<Slider
					getAriaLabel={() => 'Age range'}
					min={65}
					max={120}
					value={[minAge, maxAge]}
					onChange={handleChange}
					// valueLabelDisplay="
					getAriaValueText={valuetext}
					sx={{
						marginTop: '0px',
						marginBottom: '0px',
						// marginLeft: '10px',
						width: '90%',
						'& .MuiSlider-thumb': {
							width: '15px',
							height: '15px',
						},

					}}
					size="medium"
				/>
			</div>

		</Box>
	);
}

export default AgeSelector;
