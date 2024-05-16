import { useState } from 'react';
import PropTypes from 'prop-types';
import SelectedPersonaCard from './SelectedPersonaCard';
import SelectedPersonaDetailCard from './SelectedPersonaDetailCard';

function SinglePersonaCard({ personaId }) {
	// const [showDetails, setShowDetails] = useState(false);

	// const onClick = () => {
	// 	setShowDetails(!showDetails);
	// };
	// return (
	// 	showDetails ? <SelectedPersonaDetailCard personaId={personaId} />
	// 		: <SelectedPersonaCard onClick={onClick} personaId={personaId} />
	// );
	return (<SelectedPersonaCard personaId={personaId} />);
}

export default SinglePersonaCard;

SinglePersonaCard.propTypes = {
	personaId: PropTypes.string.isRequired,
};
