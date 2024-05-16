import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import RoundButton from './RoundButton';
import { NO_PERSONA_PROFILE } from '../../../../../../constants';

function SelectedCodesignerCard({ coDesignerId, onIconClick }) {
	const codesigners = useSelector((state) => state.codesigner.entities);
	// const selectedPersonas = useSelector((state) => state.filters.persona);
	const codesigner = codesigners[coDesignerId];

	return (
		<RoundButton
			onClick={onIconClick}
			svgData={codesigner?.profile || NO_PERSONA_PROFILE}
			sx={{
				width: '100%',
			}}
			disabled={!codesigner?.report}
		/>
	);
}

export default SelectedCodesignerCard;

// proptype
SelectedCodesignerCard.propTypes = {
	coDesignerId: PropTypes.string.isRequired,
	onIconClick: PropTypes.func.isRequired,
};
