import { useSelector } from 'react-redux';
import {
	Accordion, AccordionDetails, AccordionSummary, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from '../../../theme';
import PersonaFilterSkeleton from './PersonaFilterSkeleton';
import PersonaFilterContent from './PersonaFilterContent';

function PersonaFilterWithSelector() {
	const { loading, error } = useSelector((state) => state.persona);

	const renderPersonaSelectorContent = () => {
		if (error) {
			return null;
		}
		if (loading) {
			return <PersonaFilterSkeleton />;
		}
		if (!loading && !error) {
			return <PersonaFilterContent />;
		}
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
		</Accordion>
	);
}

export default PersonaFilterWithSelector;
