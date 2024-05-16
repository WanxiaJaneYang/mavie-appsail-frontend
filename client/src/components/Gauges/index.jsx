/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import Gauge from './Gauge';
import ImportanceRatingGauge from './ImportanceRatingGauge';
import PercentageGauge from './PercentageGauge';
import PlaceholderGauge from './PlaceholderGauge';
import ThresholdPercentageGauge from './ThresholdPercentageGauge';

function MavieGauge(props) {
	const {
		type, value, importance, percentages, threshold,
		...other
	} = props;
	switch (type) {
	case 'percentage':
		return (
			// <SvgIcon
			// 	{...other}
			// >
			<PercentageGauge
				value={value}
				importance={importance}
				percentages={percentages}
				{...other}
			/>
			// </SvgIcon>
		);
	case 'threshold':
		return (
			// <SvgIcon {...other}>
			<ThresholdPercentageGauge
				value={value}
				importance={importance}
				percentages={percentages}
				threshold={threshold}
				{...other}
			/>
			// </SvgIcon>
		);
	case 'importanceRating':
		return (
			// <SvgIcon {...other}>
			<ImportanceRatingGauge
				value={value}
				importance={importance}
				{...other}
			/>
			// </SvgIcon>
		);
	case 'placeholder':
		return (
			// <SvgIcon {...other}>
			<PlaceholderGauge
				{...other}
			/>
			// </SvgIcon>
		);
	default:
		return (
			// <SvgIcon
			// 	{...other}
			// >
			<Gauge
				value={value}
				{...other}
			/>
			// </SvgIcon>
		);
	}
}

MavieGauge.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.number,
	importance: PropTypes.number,
	percentages: PropTypes.arrayOf(PropTypes.number),
	threshold: PropTypes.number,
};
export default MavieGauge;
