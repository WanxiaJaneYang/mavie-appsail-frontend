import { arc } from 'd3-shape';

function getThresholdBubble(threshold) {
	// draw a circle with color D9D9D9
	const thresholdArc = arc()
		.innerRadius(0)
		.outerRadius(0.2)
		.startAngle(-Math.PI)
		.endAngle(Math.PI)
		.cornerRadius(0)();

	const pointThresholdArc = arc()
		.innerRadius(0)
		.outerRadius(0.2)
		.startAngle(Math.PI * 3 / 8)
		.endAngle(Math.PI / 8)
		.cornerRadius(0)();

	return (
		<>
			<path
				d={thresholdArc}
				fill="#D9D9D9"
				// set the location to the left upper corner using coordinate system
				transform="translate(1.2, -0.75)"
			/>
			<path
				d={pointThresholdArc}
				fill="#D9D9D9"
				// set the location to the left upper corner using coordinate system
				transform="translate(0.985, -0.53)"
			/>
			<text
				x="0"
				y="0"
				fontSize="0.12"
				fontFamily="Inter"
				textAnchor="middle"
				letterSpacing={0.015}
				fill="#455468"
				fontWeight={600}
				transform="translate(1.2, -0.75)"
			>
				Min
			</text>
			<text
				x="0"
				y="0"
				fontSize="0.12"
				fontFamily="Inter"
				textAnchor="middle"
				letterSpacing={0.005}
				fill="#455468"
				transform="translate(1.2, -0.625)"
				fontWeight={600}
			>
				{threshold.toFixed(1)}
			</text>
		</>
	);
}

export default getThresholdBubble;
