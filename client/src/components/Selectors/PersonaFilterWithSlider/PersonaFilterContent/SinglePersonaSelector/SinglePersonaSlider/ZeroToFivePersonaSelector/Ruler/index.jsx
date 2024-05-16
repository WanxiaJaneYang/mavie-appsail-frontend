function RulerSVG() {
	const getVerticalLines = (array) => {
		const verticalLines = [];
		for (let index = 0; index < array.length; index += 1) {
			const element = array[index];
			verticalLines.push(
				<line
					key={index}
					x1={element}
					y1="0"
					x2={element}
					y2="0.1"
					stroke="#8393A8"
					strokeWidth={0.02}
				/>,
			);
		}
		return verticalLines;
	};

	const getTexts = (array) => {
		const texts = [];
		for (let index = 0; index < array.length; index += 1) {
			const element = array[index];
			texts.push(
				<text
					key={index}
					x={element}
					y="0.3"
					fontSize="0.15"
					fontFamily="Inter, sans-serif"
					textAnchor="middle"
					letterSpacing={0.015}
					fill="#455468"
				>
					{element + 1}
				</text>,
			);
		}
		return texts;
	};

	return (
		<svg
			style={{ overflow: 'visible' }}
			width="100%"
			viewBox={[0, 0, 5, 0.5].join(' ')}
		>
			{/* draw a vertical line every 20% using grey 8393A8 */}
			{getVerticalLines([0, 1, 2, 3, 4])}
			{/* draw the text for each vertical line */}
			{getTexts([0, 1, 2, 3, 4])}
		</svg>
	);
}

export default RulerSVG;
