import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import SinglePersonaSelector from './SinglePersonaSelector';

function PersonaSelectorContent() {
	const personaIds = useSelector((state) => state.persona.ids);
	return (
		<Box width="100%">
			{personaIds?.map((personaId) => (
				<SinglePersonaSelector
					personaId={personaId}
					key={`${personaId}-selector`}
				/>
			))}
		</Box>
	);
}

export default PersonaSelectorContent;
