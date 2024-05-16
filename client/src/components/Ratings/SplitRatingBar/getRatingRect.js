export default function getRatingRect(rating) {
	const centerX = 250 * rating / 5;
	const startX = centerX - 2;
	return (
		<>
			<defs>
				<clipPath id="rounded-corners-rating">
					<rect x={startX} y="-24" width="4" height="28" rx="2" ry="2" />
				</clipPath>
			</defs>
			<g clipPath="url(#rounded-corners-rating)">
				<rect x={startX} y="-24" width="4" height="28" fill="#560C96" />
			</g>
		</>
	);
}
