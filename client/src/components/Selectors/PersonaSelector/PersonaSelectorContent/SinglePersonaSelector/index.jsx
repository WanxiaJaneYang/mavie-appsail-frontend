import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SinglePersonaSelectorWithChildren from './SinglePesonaSelectorWithChildren';
import SinglePersonaSelectorWithoutChildren from './SinglePersonaSelectorWithoutChildren';

function SinglePersonaSelector({ personaId }) {
	const personaEntity = useSelector((state) => state.persona.entities[personaId]);
	return (
		personaEntity.children?.length > 0
			? <SinglePersonaSelectorWithChildren personaId={personaId} />
			: <SinglePersonaSelectorWithoutChildren personaId={personaId} />
	);
}

export default SinglePersonaSelector;

SinglePersonaSelector.propTypes = {
	personaId: PropTypes.string.isRequired,
};
