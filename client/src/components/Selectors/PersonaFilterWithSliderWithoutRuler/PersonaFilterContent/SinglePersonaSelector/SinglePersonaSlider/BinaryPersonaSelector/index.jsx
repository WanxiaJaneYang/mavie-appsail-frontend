/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	Slider, Box,
} from '@mui/material';
import { setSelectedPersonaRange } from '../../../../../../../features/filters/personaFilterSlice';
import theme from '../../../../../../../theme';

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
			<Slider
				defaultValue={[0, 1]}
				marks
				step={1}
				sx={{
					'& .MuiSlider-thumb': {
						width: '15px',
						height: '15px',
					},
					'&& .MuiSlider-valueLabel': {
						backgroundColor: `${theme.palette.grey} !important`,
						color: '#fff',
						fontFamily: 'Inter',
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
			/>
		</Box>
	);
}

export default BinaryPersonaSlider;

BinaryPersonaSlider.propTypes = {
	personaId: PropTypes.string.isRequired,
};
