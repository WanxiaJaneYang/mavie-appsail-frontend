/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BinaryPersonaSelector from './BinaryPersonaSelector';
import ZeroToFivePersonaSelector from './ZeroToFivePersonaSelector';

function SinglePersonaSlider({ personaId }) {
	const persona = useSelector((state) => state.persona.entities[personaId]);
	const isBinary = persona?.isBinary;

	if (isBinary) {
		// console.log('BinaryPersonaSelector for persona:', persona.name);
		return <BinaryPersonaSelector personaId={personaId} />;
	}
	// console.log('isBinary:', isBinary);
	// console.log('ZeroToFivePersonaSelector for persona:', persona.name);
	return <ZeroToFivePersonaSelector personaId={personaId} />;
}

export default SinglePersonaSlider;

SinglePersonaSlider.propTypes = {
	personaId: PropTypes.string.isRequired,
};
