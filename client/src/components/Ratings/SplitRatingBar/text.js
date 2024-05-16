export function getImportanceMetricText() {
	let startX = 0;
	const textFontSize = 6;
	const gap = (250 - textFontSize * 5) / 4;
	const importanceMetricText = [];
	for (let i = 0; i < 5; i += 1) {
		importanceMetricText.push(
			<text
				x={startX}
				y="10"
				fontSize={textFontSize}
				fill="#8393A8"
				textAnchor="start"
				alignmentBaseline="middle"
				fontWeight="bold"
				fontFamily="Inter"
			>
				{i + 1}
			</text>,
		);
		startX += textFontSize + gap;
	}
	return importanceMetricText;
}

export function getRatingMetricText(fontSize = 7) {
	const ratingMetricText = [];
	ratingMetricText.push(
		<text
			x={0}
			y="20"
			fontSize={fontSize}
			fill="#8393A8"
			textAnchor="start"
			alignmentBaseline="middle"
			fontWeight="semibold"
			fontFamily="Inter"
		>
			Poor
		</text>,
	);

	ratingMetricText.push(
		<text
			x={250}
			y="20"
			fontSize={fontSize}
			fill="#8393A8"
			textAnchor="end"
			alignmentBaseline="middle"
			fontWeight="semibold"
			fontFamily="Inter"
		>
			Excellent
		</text>,
	);
	return ratingMetricText;
}

export function getPercentTexts(percents) {
	const texts = [];
	let accumulatedPercentage = 0;
	const textFontSize = 5;

	for (let i = 0; i < percents.length; i += 1) {
		const centerPos = (accumulatedPercentage + percents[i] / 2) * 250;

		texts.push(
			<text
				x={centerPos}
				y="-25"
				fontSize={textFontSize}
				fill="#8393A8"
				textAnchor="start"
				alignmentBaseline="middle"
				fontWeight="regular"
				fontFamily="Inter"
			>
				{`${Math.round(percents[i] * 100)}%`}
			</text>,
		);
		accumulatedPercentage += percents[i];
	}
	return texts;
}
