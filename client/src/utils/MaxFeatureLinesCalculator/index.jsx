import { useSelector } from 'react-redux';

function MaxFeatureLinesCalculator() {
	const domains = useSelector((state) => state.domain.entities);
	// for each domain in domains, it has featureIds array
	// get the length of each featureIds array
	// return the max length
	let maxFeatureLines = 0;
	Object.keys(domains).forEach((domainId) => {
		const { featureIds } = domains[domainId];
		if (featureIds.length > maxFeatureLines) {
			maxFeatureLines = featureIds.length;
		}
	});
	return maxFeatureLines;
}

export default MaxFeatureLinesCalculator;
