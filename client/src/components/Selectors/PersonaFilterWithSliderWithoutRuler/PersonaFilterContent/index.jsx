import { useSelector } from 'react-redux';
import SinglePersonSelector from './SinglePersonaSelector';

function PersonaFilterContent() {
	const ids = useSelector((state) => state.persona.ids);
	const entities = useSelector((state) => state.persona.entities);
	const getMeaningfulIds = () => {
		// if entities[id].min==entities[id].max then it is not a slider persona,
		// so we don't want to show it
		const meaningfulIds = [];
		ids?.forEach((id) => {
			if (entities[id].min !== entities[id].max) {
				meaningfulIds.push(id);
			}
		});
		return meaningfulIds;
	};

	return (
		<div>
			{
				getMeaningfulIds()?.map((id) => (
					<SinglePersonSelector key={`personaSelector-${id}`} personaId={id} />
				))
			}
			{/* {ids?.map((id) => (
				<SinglePersonSelector key={`personaSelector-${id}`} personaId={id} />
			))} */}
		</div>
	);
}

export default PersonaFilterContent;
