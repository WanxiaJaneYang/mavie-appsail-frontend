import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import SingleCoDesignerIcon from './SingleCoDesignerIcon';
import PersonaPopup from '../../../../Popup/PersonaPopup';
import { setCurrentCodesignerId } from '../../../../../features/codesignerSurvey';

function SingleCoDesignerHead({ coDesignerId }) {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	const handlePopupClose = () => {
		setOpen(false);
	};

	const onIconClick = () => {
		dispatch(setCurrentCodesignerId(coDesignerId));
		setOpen(true);
	};

	return (
		<>
			<SingleCoDesignerIcon onIconClick={onIconClick} coDesignerId={coDesignerId} />
			<PersonaPopup open={open} onClose={handlePopupClose} coDesignerId={coDesignerId} />
		</>
	);
}

export default SingleCoDesignerHead;

SingleCoDesignerHead.propTypes = {
	coDesignerId: PropTypes.string.isRequired,
};
