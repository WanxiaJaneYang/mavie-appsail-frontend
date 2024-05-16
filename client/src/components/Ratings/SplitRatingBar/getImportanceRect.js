export default function getImportanceRect(importance) {
	const length = importance / 5 * 249;
	return (<rect x="0" y="-7.5" width={length} height="7" fill="#ECA72C" stroke="white" strokeWidth={1} />);
}
