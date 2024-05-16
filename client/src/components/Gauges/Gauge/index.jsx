/* eslint-disable react/prop-types */
import React from 'react';
import { arc } from 'd3-shape';
import { scaleLinear } from 'd3-scale';

function Gauge({
	value = 5, min = 0, max = 5,
}) {
	// set up the arc generator for the background
	const backgroundArc = arc()
		.innerRadius(0.65)
		.outerRadius(1)
		.startAngle(-Math.PI / 2)
		.endAngle(Math.PI / 2)
		.cornerRadius(0)();

	// calculate the percentage and angle for the value
	const percent = PercentCalculator(value, min, max);

	// determine the arrow path
	const transform = 'translate(-1, -0.05)';
	const transformRotate = `rotate(${percent * 180})`;

	return (
		<svg
			style={{ overflow: 'hidden' }}
			width="100%"
			viewBox={[-1, -1, 2.25, 1.25].join(' ')}
		>
			<defs>
				<linearGradient id="backgroundGradient" x1="0" y1="0.5" x2="1" y2="0.5">
					<stop offset="0%" stopColor="#D8B2FA" />
					<stop offset="100%" stopColor="#891AEE" />
				</linearGradient>
			</defs>
			<path d={backgroundArc} fill="url(#backgroundGradient)" />
			{/* <path d={arrow} fill="#000000" /> */}
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
				x="-0.625"
				y="0.2"
				fontSize="0.13"
				fontFamily="Inter, sans-serif"
				textAnchor="end"
				letterSpacing={0.015}
				fontWeight={400}
				fill="#455468"
			>
				Poor
			</text>
			<text
				x="1.20"
				y="0.2"
				fontSize="0.13"
				fontFamily="Inter, sans-serif"
				textAnchor="end"
				letterSpacing={0.015}
				fontWeight={400}
				fill="#455468"
			>
				Excellent
			</text>
		</svg>
	);
}

const PercentCalculator = (value, min, max) => {
	const percentScale = scaleLinear().domain([min, max]).range([0, 1]);
	return percentScale(value);
};

export default Gauge;
