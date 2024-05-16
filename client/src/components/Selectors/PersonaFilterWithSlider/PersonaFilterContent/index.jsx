import { useSelector } from 'react-redux';
import SinglePersonSelector from './SinglePersonaSelector';

function PersonaFilterContent() {
	const ids = useSelector((state) => state.persona.ids);

	return (
		<div>
			{ids?.map((id) => (
				<SinglePersonSelector key={`personaSelector-${id}`} personaId={id} />
			))}
		</div>
	);
}

export default PersonaFilterContent;
