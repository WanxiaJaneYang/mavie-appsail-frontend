import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import getRect from './getRect';
import getRatingRect from './getRatingRect';
import getImportanceRect from './getImportanceRect';
import { getImportanceMetricText, getRatingMetricText, getPercentTexts } from './text';

function SplitRatingBar({
	percentages, rating, importance, ...props
}) {
	return (
		<Box
			sx={{
				// width: '100px',
				// height: '120px',
				// width: '100%',
				// height: '100%',
				minWidth: '250px',
				minHeight: '52px',
				// position: 'relative',
				...props.sx,
				zIndex: 1,
			}}
		>
			<svg
				height="100%"
				width="auto"
				viewBox="0 -28 250 50"
				overflow="hidden"
			>
				{/* round the corners of the svg */}
				<defs>
					{/* Define a clipPath with rounded corners */}
					<clipPath id="rounded-corners-split">
						{/* Adjust the rx and ry attributes to control the roundness of the corners */}
						<rect x="0" y="-20" width="250" height="20" rx="5" ry="5" stroke="white" strokeWidth={0.5} />
					</clipPath>

				</defs>

				{/* draw the percentage rects */}
				<g clipPath="url(#rounded-corners-split)">
					{getRect(percentages)}
					{getImportanceRect(importance)}
				</g>
				{getRatingRect(rating)}
				{getImportanceMetricText()}
				{getRatingMetricText()}
				{getPercentTexts(percentages)}
			</svg>
		</Box>
	);
}

export default SplitRatingBar;

SplitRatingBar.propTypes = {
	percentages: PropTypes.arrayOf(PropTypes.number).isRequired,
	rating: PropTypes.number.isRequired,
	importance: PropTypes.number.isRequired,
	// eslint-disable-next-line react/forbid-prop-types, react/require-default-props
	sx: PropTypes.object,
};
