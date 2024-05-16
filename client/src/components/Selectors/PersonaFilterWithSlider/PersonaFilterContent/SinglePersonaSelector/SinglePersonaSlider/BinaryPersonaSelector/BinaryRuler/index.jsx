function BinaryRuler() {
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

	const getTexts = () => {
		const texts = [];
		texts.push(
			<text
				key="NO TEXT"
				x={0}
				y="0.3"
				fontSize="0.13"
				fontFamily="Inter, sans-serif"
				textAnchor="middle"
				letterSpacing={0.015}
				fill="#455468"
			>
				NO
			</text>,
		);
		texts.push(
			<text
				key="YES TEXT"
				x={4}
				y="0.3"
				fontSize="0.13"
				fontFamily="Inter, sans-serif"
				textAnchor="middle"
				letterSpacing={0.015}
				fill="#455468"
			>
				YES
			</text>,
		);
		return texts;
	};

	return (
		<svg
			style={{ overflow: 'visible' }}
			width="100%"
			viewBox={[0, 0, 5, 0.5].join(' ')}
		>
			{/* draw two vertical lines at the beginning and the end */}
			{getVerticalLines([0, 4])}
			{/* draw the No at the beginning and the Yes at the end */}
			{getTexts(['NO', 'YES'])}
		</svg>
	);
}

export default BinaryRuler;
