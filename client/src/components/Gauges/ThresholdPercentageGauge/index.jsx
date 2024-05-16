/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { scaleLinear } from 'd3-scale';
import getThresholdBubble from './getThresholdBubble';
import getPercentagePaths from './getPercentagePaths';

function ThresholdPercentageGauge({
	value = 0, percentages = [0.15, 0.15, 0.22, 0.2, 0.28], min = 0, max = 5,
	size = 1, threshold = 0,
}) {
	// calculate the percentage and angle for the value
	const percent = PercentCalculator(value, min, max);

	// determine the arrow path
	const transform = 'translate(-1, -0.05)';
	const transformRotate = `rotate(${percent * 180})`;

	return (
		<div
			style={{
				width: `${size * 9}em`,
			}}
		>
			<svg
				style={{
					overflow: 'visible',
					width: '100%',
					height: '100%',
				}}
				viewBox={[-1, -1, 2.1, 1.1].join(' ')}
			>
				{getPercentagePaths(percentages).map((path, index) => (
					<React.Fragment key={`${index}group`}>
						<path
							key={`${index}path`}
							d={path.d}
							fill={path.fill}
						/>
					</React.Fragment>

				))}
				<g transform={transformRotate}>
					<g transform={transform}>
						<svg
							width="1"
							height="0.1"
							viewBox="0 0 85 10"
						>
							<rect x="0.5" y="0.5" width="94" height="9" rx="5" fill="#455468" stroke="white" />
						</svg>
					</g>
				</g>
				<text
					x="-0.6"
					y="0.2"
					fontSize="0.15"
					fontFamily="Inter, sans-serif"
					textAnchor="end"
					letterSpacing={0.015}
					fill="#455468"
				>
					Poor
				</text>
				<text
					x="0.50"
					y="0.2"
					fontSize="0.15"
					fontFamily="Inter, sans-serif"
					textAnchor="start"
					letterSpacing={0.015}
					fill="#455468"
				>
					Excellent
				</text>
				{value >= threshold && getThresholdBubble(threshold)}
			</svg>
		</div>
	);
}

const PercentCalculator = (value, min, max) => {
	const percentScale = scaleLinear().domain([min, max]).range([0, 1]);
	return percentScale(value);
};

export default ThresholdPercentageGauge;
