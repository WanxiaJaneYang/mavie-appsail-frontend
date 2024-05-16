/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	Slider, Box, Typography,
} from '@mui/material';
import { setSelectedPersonaRange } from '../../../../../../../features/filters/personaFilterSlice';
import theme from '../../../../../../../theme';
import BinaryRuler from './BinaryRuler';

function BinaryPersonaSlider({ personaId }) {
	const dispatch = useDispatch();
	const { min, max } = useSelector((state) => state.filters.persona[personaId]);
	const handleChange = (event, newValue) => {
		dispatch(setSelectedPersonaRange({ id: personaId, min: newValue[0], max: newValue[1] }));
	};

	const getAriaValueTextFormat = (value1) => {
		if (value1 === 0) {
			return 'NO';
		}
		return 'YES';
	};

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
				defaultValue={[0, 1]}
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
				min={0}
				max={1}
				value={[min, max]}
				onChange={handleChange}
				valueLabelFormat={getAriaValueTextFormat}
				valueLabelDisplay="auto"
				disableSwap
				minDistance={1}
			/>

			<Box sx={{ width: '103.5%', marginLeft: '5%', marginTop: '-1%' }}>
				<BinaryRuler />
			</Box>
		</Box>
	);
}

export default BinaryPersonaSlider;

BinaryPersonaSlider.propTypes = {
	personaId: PropTypes.string.isRequired,
};
