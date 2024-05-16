import { useSelector } from 'react-redux';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonaSelectorSkeleton from './PersonaSelectorSkeleton';
import PersonaSelectorContent from './PersonaSelectorContent';
import theme from '../../../theme';

function PersonaSelector() {
	const { loading, error } = useSelector((state) => state.persona);

	const renderPersonaSelectorContent = () => {
		if (error) {
			return null;
		}
		if (loading) {
			return <PersonaSelectorSkeleton />;
		}
		return <PersonaSelectorContent />;
	};

	return (
		<Accordion
			elevation={0}
			// defaultExpanded
			// disableGutters
			sx={{
				marginTop: '0px',
				padding: '0px',
				'&:before': {
					display: 'none',
				},
				'&:after': {
					display: 'none',
				},
				'&.Mui-expanded': {
					marginTop: '0px',
					marginBottom: '0px',
				},
			}}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="persona-selector-header"
				sx={
					{
						paddingLeft: '0px',
						paddingRight: '0px',
						marginBottom: '0px',
						// paddingBottom: '10px',
						// before
						'&:before': {
							height: '0px',
						},
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
					Persona Category
				</Typography>
			</AccordionSummary>
			<AccordionDetails
				sx={{
					marginTop: '-10px',
					marginLeft: '0px',
					padding: '0px',
				}}
			>
				{renderPersonaSelectorContent()}
			</AccordionDetails>
		</Accordion>

	);
}

export default PersonaSelector;
