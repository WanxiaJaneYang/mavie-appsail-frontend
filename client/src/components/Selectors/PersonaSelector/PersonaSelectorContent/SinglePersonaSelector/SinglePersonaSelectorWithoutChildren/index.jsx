import PropTypes from 'prop-types';
import {
	Checkbox, Box, Typography,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPersona } from '../../../../../../features/filters/personaFilterSlice';
import theme from '../../../../../../theme';
import DynamicSvg from '../../../../../DynamicSvgIcon';

function SinglePersonaSelectorWithoutChildren({ personaId }) {
	const personaEntity = useSelector((state) => state.persona.entities[personaId]);
	const allSelected = useSelector((state) => state.filters.persona);
	const selected = useSelector((state) => state.filters.persona[personaId]);
	const dispatch = useDispatch();

	const handleSelectCheckbox = () => {
		dispatch(setSelectedPersona({
			...allSelected,
			[personaId]: !selected,
		}));
	};

	return (
		<Box
			sx={{
				padding: '0px',
				margin: '0px',
				height: '42px',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
			}}
		>

			<Checkbox
				checked={selected}
				onChange={handleSelectCheckbox}
				sx={
					{
						color: theme.palette.grey,
						'&.Mui-checked': {
							color: theme.palette.primary.light,
						},
						verticalAlign: 'middle',
						marginRight: '0px',
					}
				}
			/>
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
				svgData={personaEntity.icon}
			/>
			<Typography
				sx={{
					fontFamily: 'Inter',
					fontWeight: '600',
					fontSize: '12px',
					color: theme.palette.dark,
					marginLeft: '-1px',
				}}
			>
				{personaEntity.name}
			</Typography>
		</Box>

	);
}

export default SinglePersonaSelectorWithoutChildren;

SinglePersonaSelectorWithoutChildren.propTypes = {
	personaId: PropTypes.string.isRequired,
};
