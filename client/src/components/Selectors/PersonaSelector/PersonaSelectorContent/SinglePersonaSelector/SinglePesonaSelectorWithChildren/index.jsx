import PropTypes from 'prop-types';
import {
	Accordion, AccordionDetails, AccordionSummary, Checkbox, Box, Typography,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { setSelectedPersona } from '../../../../../../features/filters/personaFilterSlice';
import theme from '../../../../../../theme';
import DynamicSvg from '../../../../../DynamicSvgIcon';

function SinglePersonaSelectorWithChildren({ personaId }) {
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
		<Accordion
			elevation={0}
			// remove border shadow
			disableGutters
			sx={{
				padding: '0px',
				margin: '0px',
				backgroundColor: theme.palette.white,
				'&:before': {
					display: 'none',
				},
				// '&:after': {
				// 	display: 'none',
				// },
				'&.Mui-expanded': {
					margin: '0px',
				},
				'.MuiAccordionSummary-root': {
					height: '42px',
				},
			}}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				sx={{
					padding: '0px',
					margin: '0px',

				}}
			>
				<Box sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					padding: '0px',
					margin: '0px',
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
			</AccordionSummary>
			<AccordionDetails sx={{
				marginLeft: '72px',
				marginTop: '-10px',
				marginBottom: '0px',
				padding: '0px',
			}}
			>
				{personaEntity.children?.map((child) => (
					<Typography
						key={child}
						sx={{
							fontFamily: 'Inter',
							fontWeight: '400',
							fontSize: '12px',
							color: theme.palette.dark,
						}}
					>
						{child}
					</Typography>
				))}
			</AccordionDetails>
		</Accordion>
	);
}

export default SinglePersonaSelectorWithChildren;

SinglePersonaSelectorWithChildren.propTypes = {
	personaId: PropTypes.string.isRequired,
};
