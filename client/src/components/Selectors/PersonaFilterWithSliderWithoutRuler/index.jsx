import { useSelector } from 'react-redux';
import {
	Accordion, AccordionDetails, AccordionSummary, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from '../../../theme';
import PersonaFilterSkeleton from './PersonaFilterSkeleton';
import PersonaFilterContent from './PersonaFilterContent';

function PersonaFilterWithSelector() {
	const { loading, error, entities } = useSelector((state) => state.persona);
	const { isSurvey } = useSelector((state) => state.filters.survey);

	const renderPersonaSelectorContent = () => {
		if (error) {
			return null;
		}
		if (loading) {
			return <PersonaFilterSkeleton />;
		}
		if (entities) {
			console.log('persona entities not empty');
			return <PersonaFilterContent />;
		}
		console.log('persona entities empty');
		return null;
	};

	return (
		<Accordion
			elevation={0}
			// defaultExpanded
			disableGutters
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="persona-selector-header"
				sx={
					{
						paddingLeft: '0px',
						paddingRight: '0px',
						paddingBottom: '10px',
					}
				}
			>
				<Typography
					sx={{
						fontFamily: 'Inter, sans-serif',
						fontWeight: '600',
						fontSize: '14px',
						color: theme.palette.dark,
						marginLeft: '-1px',

					}}
				>
					Persona
				</Typography>
			</AccordionSummary>
			{!isSurvey && (
				<AccordionDetails
					sx={{
						marginTop: '-10px',
						marginLeft: '0px',
						padding: '0px',
						width: '100%',
					}}
				>
					{renderPersonaSelectorContent()}
				</AccordionDetails>
			)}
		</Accordion>
	);
}

export default PersonaFilterWithSelector;
