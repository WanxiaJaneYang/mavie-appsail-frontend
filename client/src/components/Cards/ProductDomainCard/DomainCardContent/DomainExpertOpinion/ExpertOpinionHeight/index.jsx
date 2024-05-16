import PropTypes from 'prop-types';

// function ExpertOpinionHeight() {
function ExpertOpinionHeight({ size }) {
	switch (size) {
	case 'sm':
		return 75;
	case 'md':
		return 160;
	case 'lg':
		return 115;
	case 'xl':
		return 95;
	default:
		return 95;
	}
}

export default ExpertOpinionHeight;

ExpertOpinionHeight.propTypes = {
	size: PropTypes.string.isRequired,
};
