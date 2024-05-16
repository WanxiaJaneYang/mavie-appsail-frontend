/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	Slider, Box, SvgIcon, Typography,
} from '@mui/material';
import { setSelectedPersonaRange } from '../../../../../../../features/filters/personaFilterSlice';
import theme from '../../../../../../../theme';
import ErrorMessage from '../../../../../../DisplayErrorMessage/ErrorMessage';

function ZeroToFivePersonaSlider({ personaId }) {
	const dispatch = useDispatch();
	const {
		allowedMin, allowedMax, selectedMin, selectedMax,
	} = useSelector((state) => state.filters.persona[personaId]);
	const handleChange = (event, newValue) => {
		if (newValue[0] < allowedMin) {
			dispatch(setSelectedPersonaRange({
				id: personaId,
				selectedMin: allowedMin,
				selectedMax: newValue[1],
			}));
		} else if (newValue[1] > selectedMax) {
			dispatch(setSelectedPersonaRange({
				id: personaId,
				selectedMin: newValue[0],
				selectedMax: allowedMax,
			}));
		} else {
			dispatch(setSelectedPersonaRange({
				id: personaId,
				selectedMin: newValue[0],
				selectedMax: newValue[1],
			}));
		}
	};

	const valueLabelFormat = (val) => `${val}`;

	return (
		<Box
			sx={{
				// justifyContent: 'start',
				width: '100%',
				position: 'relative',
			}}
		>
			<Slider
				defaultValue={[selectedMin, selectedMax]}
				position="absolute"
				top={0}
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
					},

					width: '83%',
					marginLeft: '5%',
				}}
				min={1}
				max={5}
				value={[selectedMin, selectedMax]}
				onChange={handleChange}
				valueLabelFormat={valueLabelFormat}
				valueLabelDisplay="auto"
				disableSwap
				getAriaValueText={valueLabelFormat}
			/>
		</Box>
	);
}

export default ZeroToFivePersonaSlider;

ZeroToFivePersonaSlider.propTypes = {
	personaId: PropTypes.string.isRequired,
};
