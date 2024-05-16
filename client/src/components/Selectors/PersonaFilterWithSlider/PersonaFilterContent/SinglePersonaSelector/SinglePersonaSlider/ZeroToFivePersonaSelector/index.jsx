/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	Slider, Box, SvgIcon, Typography,
} from '@mui/material';
import { setSelectedPersonaRange } from '../../../../../../../features/filters/personaFilterSlice';
import theme from '../../../../../../../theme';
import RulerSVG from './Ruler';

function ZeroToFivePersonaSlider({ personaId }) {
	const dispatch = useDispatch();
	const { min, max } = useSelector((state) => state.filters.persona[personaId]);
	const handleChange = (event, newValue) => {
		dispatch(setSelectedPersonaRange({ id: personaId, min: newValue[0], max: newValue[1] }));
	};
	const [value, setValue] = useState([min, max]);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'start',
				width: '100%',
			}}
		>
			<Typography sx={{
				fontFamily: 'Inter',
				fontWeight: '600',
				fontSize: '10px',
				color: theme.palette.darkest,
				marginLeft: '3%',
			}}
			>
				Set Range
			</Typography>
			<Slider
				defaultValue={[1, 5]}
				marks
				step={1}
				sx={{
					'& .MuiSlider-thumb': {
						width: '15px',
						height: '15px',
					},
					'& .MuiSlider-valueLabel': {
						backgroundColor: theme.palette.dark,
					},
					width: '83%',
					marginLeft: '5%',
				}}
				min={1}
				max={5}
				value={[min, max]}
				onChange={handleChange}
				valueLabelFormat={(value1) => `${value1}`}
				valueLabelDisplay="auto"
				disableSwap
			/>
			<Box sx={{ width: '103.5%', marginLeft: '5%', marginTop: '-1%' }}>
				<RulerSVG />
			</Box>
		</Box>
	);
}

export default ZeroToFivePersonaSlider;

ZeroToFivePersonaSlider.propTypes = {
	personaId: PropTypes.string.isRequired,
};
