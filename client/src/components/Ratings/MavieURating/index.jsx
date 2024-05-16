/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { arc } from 'd3-shape';
import fiveStar from '../../../images/svg/FiveStars.svg';
import zeroStar from '../../../images/svg/ZeroStars.svg';

function MavieURating({ rating, ...props }) {
	// Convert the rating to a percentage
	const ratingValue = parseFloat(rating);
	// calculate the first mask rendering percentage
	// the threshold is the rating that the first mask is not needed
	const firstThreshold = 0.85;
	const secondThreshold = 4.1;
	// startBase is the base percentage for the first mask to start if the rating is not 0
	const startBase = 0.53;
	const finalBase = 0.53;
	const firstMaskPercent = () => {
		if (ratingValue === 0) {
			return 0;
		}
		// case that rating is too high that first mask is not needed
		if (ratingValue >= firstThreshold) {
			return 1;
		}

		// the ratio of the first mask
		return startBase + ratingValue * ((1 - startBase) / firstThreshold);
	};

	const piePercent = () => {
		let percent = 0;
		const firstStarRatio = 0.02;
		const overFirstStarBase = 0.17;
		const firstPointFifthStar = 0.215;
		const secondStarRatio = 0.263;
		const overSecondStarBase = 0.455;
		const secondPointFifthStar = 0.5;
		const thirdStarRatio = 0.545;
		const overThirdStarBase = 0.74;
		const thirdPointFifthStar = 0.783;
		const fourthStarRatio = 0.83;
		const overFourthStarBase = 0.98;
		// case that rating is too low that the second mask is not needed
		if (ratingValue < firstThreshold) {
			percent = 0;
		} else if (ratingValue <= 1) {
			const rate = firstStarRatio / (1 - firstThreshold);
			percent = rate * (ratingValue - firstThreshold);
		} else if (ratingValue <= 1.5) {
			const rate = (firstPointFifthStar - overFirstStarBase) / (1.5 - 1);
			percent = overFirstStarBase + rate * (ratingValue - 1);
		} else if (ratingValue <= 2.0) {
			const rate = (secondStarRatio - firstPointFifthStar) / (2.0 - 1.5);
			percent = firstPointFifthStar + rate * (ratingValue - 1.5);
		} else if (ratingValue <= 2.5) {
			const rate = (secondPointFifthStar - overSecondStarBase) / (2.5 - 2.0);
			percent = overSecondStarBase + rate * (ratingValue - 2.0);
		} else if (ratingValue <= 3.0) {
			const rate = (thirdStarRatio - secondPointFifthStar) / (3.0 - 2.5);
			percent = secondPointFifthStar + rate * (ratingValue - 2.5);
		} else if (ratingValue <= 3.5) {
			const rate = (thirdPointFifthStar - overThirdStarBase) / (3.5 - 3.0);
			percent = overThirdStarBase + rate * (ratingValue - 3.0);
		} else if (ratingValue <= 4.0) {
			const rate = (fourthStarRatio - thirdPointFifthStar) / (4.0 - 3.5);
			percent = thirdPointFifthStar + rate * (ratingValue - 3.5);
		} else if (ratingValue < secondThreshold) {
			const rate = (1 - overFourthStarBase) / (secondThreshold - 4.0);
			percent = overFourthStarBase + rate * (ratingValue - 4.0);
		} else {
			percent = 1;
		}
		console.log('percent', percent);
		return percent;
	};

	const finalMaskPercent = () => {
		const fourPointFive = 0.29;
		if (ratingValue < secondThreshold) {
			return 1;
		}
		if (ratingValue === 5) {
			return 0;
		}
		if (ratingValue <= 4.5) {
			const rate = (1 - finalBase - fourPointFive) / (4.5 - secondThreshold);
			return 1 - rate * (ratingValue - secondThreshold);
		}
		const rate = (1 - finalBase) / (5 - secondThreshold);
		return 1 - rate * (ratingValue - secondThreshold);
	};
	const maskId = 'rating-mask';

	const markArc = arc()
		.innerRadius(0)
		.outerRadius(72)
		.startAngle(3 * Math.PI / 2)
		.endAngle((3 / 2 - piePercent()) * Math.PI)();

	return (
		<Box
			sx={{
				// width: '100px',
				// height: '120px',
				// width: '100%',
				// height: '100%',
				minWidth: '25px',
				minHeight: '25px',
				// position: 'relative',
				...props.sx,
			}}
		>
			<svg
				height="100%"
				width="auto"
				viewBox="0 0 144 100"
				xmlns="http://www.w3.org/2000/svg"
				overflow="visible"
			>
				<defs>
					<mask id={maskId}>
						<rect width="100%" height="100%" fill="black" />
						<rect width="50%" height={`${28 * firstMaskPercent() + 0.5}%`} fill="white" x="0" y="0" />
						<path d={markArc} fill="white" transform="translate(72,28)" />
						<rect width="50%" height="28.5%" fill="white" x="72" y="0" />
						<rect width="50%" height={`${28 * finalMaskPercent() + 0.5}%`} fill="black" x="72" y="0" />
					</mask>
				</defs>
				<image
					href={zeroStar}
					width="100%"
					height="100%"
				/>
				<image
					href={fiveStar}
					width="100%"
					height="100%"
					mask={`url(#${maskId})`}
				/>
			</svg>

		</Box>
	);
}

MavieURating.propTypes = {
	rating: PropTypes.string.isRequired,
	// eslint-disable-next-line react/forbid-prop-types, react/require-default-props
	sx: PropTypes.object,
};

export default MavieURating;
