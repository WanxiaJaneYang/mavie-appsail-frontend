import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Box } from '@mui/material';
import DynamicSvg from '../../../../DynamicSvgIcon';
import { setSelectedPersona } from '../../../../../features/filters/personaFilterSlice';
import SinglePersonaSlider from './SinglePersonaSlider';
import theme from '../../../../../theme';

function SinglePersonaSelector({ personaId }) {
	const dispatch = useDispatch();
	const personaInfo = useSelector((state) => state.persona.entities[personaId]);
	// const personaInfo = personas[personaId];
	const personaFilter = useSelector((state) => state.filters.persona[personaId]);

	const handleSelectCheckbox = (id) => {
		dispatch(setSelectedPersona({ id, selected: !personaFilter.selected }));
	};
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'start',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					gap: '1px',
					margin: '0px',
					marginBottom: '8px',
					marginTop: '8px',
				}}

			>

				{/* <Checkbox
					checked={personaFilter?.selected}
					onChange={() => handleSelectCheckbox(personaId)}
					sx={
						{
							color: theme.palette.grey,
							'&.Mui-checked': {
								color: theme.palette.primary.light,
							},
							marginRight: '0px',
						}
					}

				/> */}
				<DynamicSvg
					style={{
						display: 'flex',
						width: '24px',
						height: '24px',
						borderRadius: '50%',
						verticalAlign: 'middle',
						marginLeft: '0px',
						marginRight: '8px',
					}}
					onClick={() => handleSelectCheckbox(personaId)}
					svgData={personaInfo?.icon}
				/>
				<span
					style={{
						fontFamily: 'Inter',
						fontWeight: '600',
						fontSize: '12px',
						verticalAlign: 'middle',
					}}
				>
					{personaInfo?.name || 'default persona'}
				</span>
			</Box>
			<SinglePersonaSlider personaId={personaId} />

		</Box>
	);
}

SinglePersonaSelector.propTypes = {
	personaId: PropTypes.string.isRequired,
};

export default SinglePersonaSelector;
