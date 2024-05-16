import PropTypes from 'prop-types';

// function ExpertOpinionLength() {
function ExpertOpinionLength(size) {
	switch (size) {
	case 'xs':
		return 100;
	case 'sm':
		return 200;
	case 'md':
		return 200;
	case 'lg':
		return 300;
	case 'xl':
		return 400;
	case 'xxl':
		return 500;
	default:
		return 95;
	}
}

export default ExpertOpinionLength;

ExpertOpinionLength.propTypes = {
	size: PropTypes.string.isRequired,
};
