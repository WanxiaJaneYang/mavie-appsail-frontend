import { arc } from 'd3-shape';
import getTransitionColor from './getTransitionColor';

const getPercentagePaths = (percentages) => {
	const paths = [];
	let startAngle = -Math.PI / 2;
	let endAngle = 0;
	let startPercentage = 0;
	for (let i = 0; i < percentages.length; i += 1) {
		endAngle = (startPercentage + percentages[i]) * Math.PI - Math.PI / 2;
		// calculate the arc path
		const percentageArc = arc()
			.innerRadius(0.65)
			.outerRadius(1)
			.startAngle(startAngle)
			.endAngle(endAngle)
			.cornerRadius(0)();
		// calculate the color
		const colorPercentage = startPercentage + percentages[i] / 2;
		const color = getTransitionColor(colorPercentage);
		// calculate the text
		// calculate the position of the text
		const textAngle = ((endAngle + startAngle) / 2) * 1.1;
		const textX = Math.cos(textAngle - Math.PI / 2) * 1.2;
		const textY = Math.sin(textAngle - Math.PI / 2) * 1.2 < -1
			? Math.sin(textAngle - Math.PI / 2) * 1.15 + 0.05
			: Math.sin(textAngle - Math.PI / 2) * 1.15;
		const textContent = `${Math.round(percentages[i] * 100)}%`;
		paths.push({
			d: percentageArc,
			fill: color,
			textPosition: [textX, textY],
			textContent,
		});
		startPercentage += percentages[i];
		startAngle = endAngle;
	}
	// if (startPercentage < 1) {
	// 	throw new Error('Percentage does not add up to 1');
	// }
	return paths;
};

export default getPercentagePaths;
