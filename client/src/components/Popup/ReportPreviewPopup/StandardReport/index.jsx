import PropTypes from 'prop-types';

function StandardReport({ productId, reportType }) {

}

export default StandardReport;

StandardReport.propTypes = {
	productId: PropTypes.string.isRequired,
	reportType: PropTypes.string.isRequired,
};
