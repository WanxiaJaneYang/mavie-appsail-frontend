import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import theme from '../../../theme';

function ScoreBar({
	score, importance, importanceRatingOn, highlight, color,
}) {
	const getBarColor = () => {
		if (highlight) return theme.palette.primary.main;
		return color;
	};
	const BorderLinearProgress = styled(LinearProgress)(() => ({
		height: 10,
		borderRadius: 5,
		[`&.${linearProgressClasses.colorPrimary}`]: {
			backgroundColor: '#EFF1F4',
		},
		[`& .${linearProgressClasses.bar}`]: {
			borderRadius: 20,
			backgroundColor: getBarColor(),
		},
	}));

	const ImportanceLinearProgress = styled(LinearProgress)(() => ({
		height: 4,
		borderRadius: 5,
		[`&.${linearProgressClasses.colorPrimary}`]: {
			backgroundColor: 'transparent',
		},
		[`& .${linearProgressClasses.bar}`]: {
			borderRadius: 20,
			backgroundColor: '#ECA72C',
		},
	}));

	return (
		<Box
			sx={{
				position: 'relative',
				width: '100%',
			}}
		>
			<BorderLinearProgress
				variant="determinate"
				value={score / 5 * 100}
			/>
			{
				importanceRatingOn && (
					<Box
						sx={{
							position: 'absolute',
							top: '50%',
							left: 4,
							width: '100%',
							transform: 'translateY(-50%)',
							pointerEvents: 'none',
						}}
					>
						<ImportanceLinearProgress
							variant="determinate"
							value={importance / 5 * 95}
						/>
					</Box>
				)
			}
		</Box>
	);
}

ScoreBar.propTypes = {
	score: PropTypes.number.isRequired,
	importance: PropTypes.number,
	importanceRatingOn: PropTypes.bool,
	highlight: PropTypes.bool,
	color: PropTypes.string,
};

ScoreBar.defaultProps = {
	importance: 0,
	importanceRatingOn: false,
	highlight: false,
	color: theme.palette.grey,
};

export default ScoreBar;
