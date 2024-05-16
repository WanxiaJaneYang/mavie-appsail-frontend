import getTransitionColor from './getTransitionColor';

export default function getRect(percentages) {
	// start from the left, draw the percentage rects horizontally
	// color is handled by getTransitionColor,
	// which is a helper function receiving the percentage and returning the color
	// calculate the params for the rect needed
	const rectParams = [];
	const totalWidth = 250;
	let startX = 0;
	let accumulatedPercentage = 0;
	for (let i = 0; i < percentages.length; i += 1) {
		const rectParam = {
			x: startX,
			y: -20,
			width: totalWidth * percentages[i],
			height: 20,
			fill: getTransitionColor(accumulatedPercentage),
		};
		accumulatedPercentage += percentages[i];
		startX += rectParam.width;
		rectParams.push(rectParam);
	}
	// return the rect based on the params
	return rectParams.map((rectParam, index) => (
		<rect
			key={`rect-${rectParam.x}-${rectParam.y}-${rectParam.width}-${rectParam.height}-${rectParam.fill}`}
			x={rectParam.x}
			y={rectParam.y}
			width={rectParam.width}
			height={rectParam.height}
			fill={rectParam.fill}
			stroke="white"
			strokeWidth="0.5"
		/>
	));
}
